import React, { Component } from 'react';
import ContactList from './ContactList';


class App extends Component {
   state = {
    contacts :[
    {
      "id": "karen",
      "name": "Karen Isgrigg",
      "handle": "karen_isgrigg",
      "avatarURL": "http://localhost:5001/karen.jpg"
    },
    {
      "id": "richard",
      "name": "Richard Kalehoff",
      "handle": "richardkalehoff",
      "avatarURL": "http://localhost:5001/richard.jpg"
    },
    {
      "id": "tyler",
      "name": "Tyler McGinnis",
      "handle": "tylermcginnis",
      "avatarURL": "http://localhost:5001/tyler.jpg"
    }
   ]
  };

  removeContact = (contactToRemove) => {
    this.setState((currentState) => {
      return { 
        contacts: currentState.contacts.filter((contact) => contact.id !== contactToRemove.id) 
      }
    });
   }

  render() {
    return (
      <ContactList contacts={this.state.contacts} onDeleteContact={this.removeContact} />
    );
  }
}

export default App;
