import React from 'react'

export  function ContactsPreview({contact ,  onSelectContactId}) {
  return (
    <article className='contact-card' onClick={()=>onSelectContactId(contact._id)}>
        <div className='contact-info'>
        <h2>{ contact.name }</h2>
        <img src={`https://robohash.org/${contact.name}`}/>
        <p>Click me if you want to know more about me</p>
     
        </div>
        

    </article>
  )
}
