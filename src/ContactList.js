import React, { Component } from 'react';
import PropTypes from 'prop-types';

function ContactList(props) {

    const persons = props.contacts.map((contact, index) => (
        <li key={contact.id} className='contact-list-item'>
            <div className='contact-avatar' style={{backgroundImage: `url(${contact.avatarURL})`}}>

            </div>
            <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.handle}</p>                
            </div>
            <button className='contact-remove' onClick={() => props.onDeleteContact(contact)}></button>

        </li>
      ));
      return (
        <ol className="contact-list">
          {persons}
        </ol>
      );
}

ContactList.prototype = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}
export default ContactList