import React from 'react'

export  function ContactsPreview({contact}) {
  return (
    <article className='contact-card'>
        <div className='contact-info'>
        <h2>{ contact.name }</h2>
        <img src={`https://robohash.org/${contact.name}`}/>
        <p><span>Email -</span>{contact.email}</p>
        <p><span>Phone -</span>{contact.phone}</p>
        </div>
        

    </article>
  )
}
