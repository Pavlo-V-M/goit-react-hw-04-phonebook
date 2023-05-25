// import React from 'react';
// import ContactForm from './contact-form/ContactForm';
// import ContactList from './contact-list/ContactList'; // new import
// import Filter from './filter/Filter'; // new import

// export class App extends React.Component {
  
//   state = {
//     contacts: [
//       // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//       // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//       // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//       // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ],
//     search: '',
//   }

//   /* using react lifecycle methods */

//   componentDidMount() {
//     const storedContacts = localStorage.getItem('contacts');
//     if (storedContacts) {
//       this.setState({ contacts: JSON.parse(storedContacts) });
//     }
//   }

//   componentDidUpdate() {
//     const { contacts } = this.state;
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }
 
//   /*
//   Step 2.1 creat new object & add to the component's state
//   Step 2.1 add an event handler function for the form's onSubmit event
//   prevent the default form submission behavior In this function
  
//   Step 2.2 pass name: '', & contactsNumber: '', in ContactForm
//   Step 2.2 pass form HTML layout in ContactForm
//   Step 2.2 pass handleChange in ContactForm
//   Step 2.2 pass handleSubmit in ContactForm
  
//   Step 2.3 get component's from ContactForm state
//   */

//   // FormStateDataReceiver = data => {
//   //   this.setState(prevState => ({
//   //     contacts: [...prevState.contacts, data],
//   //   }));
//   //   /*
//   //   console.log(data);
//   //   setTimeout(() => {
//   //   console.log(data);
//   //   }, 2000);
//   //   */
//   // }

//   /* Updating the FormStateDataReceiver method to
//   disallow entering an existing contact */
  
//   FormStateDataReceiver = (data) => {
//   const { name } = data;
//   const existingContact = this.state.contacts.find((contact) => contact.name === name);
//   if (existingContact) {
//     alert(`${name} is already in contacts`);
//     return;
//   }
//   this.setState((prevState) => ({
//     contacts: [...prevState.contacts, data],
//   }));
//  };

//   // adding a filter
  
//   handleSearchChange = event => {
//     this.setState({ search: event.target.value });
//   }

//   // adding remove

//   handleDeleteContact = name => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.name !== name),
//     }));
//   }
  
//   render() {
//     const { contacts, search } = this.state;
//     const filteredContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//       <div
//         style={{
//           // height: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           // justifyContent: 'center',
//           alignItems: 'flex-start',
//           alignContent: 'flex-start',
//           padding: 10,
//           // fontSize: 40,
//           color: '#010101'
//           }}
//         >
//           <h1>Phonebook</h1>

//           <ContactForm onReceiver={this.FormStateDataReceiver} />

//           <h2>Contacts</h2>

//           <Filter value={search} onChange={this.handleSearchChange} />
        
//           <ContactList contacts={filteredContacts} onDelete={this.handleDeleteContact} />
          
//        </div>
//   );
//   }
// };

// --------------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import ContactForm from './contact-form/ContactForm';
import ContactList from './contact-list/ContactList';
import Filter from './filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFormStateDataReceiver = (data) => {
    const { name } = data;
    const existingContact = contacts.find((contact) => contact.name === name);
    if (existingContact) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts((prevContacts) => [...prevContacts, data]);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleDeleteContact = (name) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.name !== name)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        padding: 10,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onReceiver={handleFormStateDataReceiver} />
      <h2>Contacts</h2>
      <Filter value={search} onChange={handleSearchChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
};

// export default App;
