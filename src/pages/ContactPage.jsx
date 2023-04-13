import React, { Component } from 'react'
import {contactService} from '../services/contact.service'
import { ContactList } from '../components/ContactList'
import { ContactFilter } from '../components/ContactFilter'
export  class ContactPage extends Component { 

state={
    contacts:null,
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
    console.log('filterBy in onChangeFilter',filterBy)
    
    this.setState( { filterBy: { ...filterBy } } ,this.loadContacts)
    console.log('filterBy in onChangeFilter after setState' ,this.state.filterBy)

}
  render() {
    const {contacts,filterBy} = this.state
    return (
        <section className='contact-page-container'>
            {contacts?
            <>
               <h2>Contact-List</h2>
            <ContactFilter
             onChangeFilter={this.onChangeFilter} 
             filterBy={filterBy}/>
            <ContactList 
              contacts={contacts}/>
            </>:<div>Loading.... </div>
         }
            

        </section>
    )
  }
}
