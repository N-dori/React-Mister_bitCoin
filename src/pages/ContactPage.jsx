import React, { Component } from 'react'
import {contactService} from '../services/contact.service'
import { ContactList } from '../components/ContactList'
import { ContactFilter } from '../components/ContactFilter'
import { ContactDetailsPage } from './ContactDetailsPage'
export  class ContactPage extends Component { 

state={
    contacts:null,
    SelectContactId:null,
       filterBy:{
        email:'',
        name:'',
        phone:'',
    }
}

componentDidMount(){
    this.loadContacts()
}

loadContacts = async () => {
    try{
       
        console.log('filterBy in loadContacts ',this.state.filterBy);

        const contacts= await contactService.getContacts(this.state.filterBy)
        console.log('contacts', contacts);
        this.setState({contacts})

    }catch (err){
        console.log('error can not load contacts',err);
    }
}

onChangeFilter = (filterBy) => {
    this.setState( { filterBy: { ...filterBy } } ,this.loadContacts)

}

onSelectContactId = (contactId) => {
    console.log('contactId',contactId)
    this.setState({SelectContactId:contactId})
}
  render() {
    const {contacts,filterBy,SelectContactId} = this.state
    return (
        <section className='contact-page-container'>
            {contacts?
            SelectContactId?
            <ContactDetailsPage contactId={SelectContactId} onBack={(() => this.onSelectContactId(null))}/>:
            <>
            <h2>Contact-List</h2>
            <ContactFilter
             onChangeFilter={this.onChangeFilter} 
             filterBy={filterBy}/>
            <ContactList 
            onSelectContactId={this.onSelectContactId}
              contacts={contacts}/>
            </>:
            <div>Loading.... </div>
         }
            

        </section>
    )
  }
}
