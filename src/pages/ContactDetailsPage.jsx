
import React, { Component } from 'react'
import { contactService } from '../services/contact.service'


export  class ContactDetailsPage extends Component {

    state = {
        contact :null
    }

    componentDidMount(){
        this.loadContact()
    }
    loadContact= async () =>{
        if(!this.props.contactId)return 
        const contact = await contactService.getContactById(this.props.contactId)
        this.setState({contact})
      
    }
  render() {
    const { contact } = this.state
    console.log('contact',contact)
   
    return (
        contact?
        <section className='details-container'>
            <div className='details-info-card'>
          <h1> Hello! my name is {contact.name}  </h1>
          <img src={`https://robohash.org/${contact.name}`}/>
          <p> I would love to here back from you </p>
          <p>You can contact me via email <span className='details-info-email'>{contact.email}</span></p>
          <p>Or you can just call me <span className='details-info-phone'>{contact.phone}</span></p>
          <button className='btn-back' onClick={this.props.onBack}>Back</button>
            </div>

        
      </section>:  <span>Loading...</span>
    )
  }
}
