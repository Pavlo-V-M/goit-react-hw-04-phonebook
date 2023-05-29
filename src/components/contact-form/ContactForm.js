import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const ContactForm = ({ onReceiver }) => {
  const [name, setName] = useState('');
  const [contactsNumber, setContactsNumber] = useState('');

  const nameInputID = nanoid();
  const numberInputID = nanoid();

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'contactsNumber') {
      setContactsNumber(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      name: name,
      number: contactsNumber,
    };
    onReceiver(newContact);
    setName('');
    setContactsNumber('');
  };

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={nameInputID}>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
        id={nameInputID}
      />
      <label htmlFor={numberInputID}>Number</label>
      <input
        type="tel"
        name="contactsNumber"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
        title="Phone number format: 123-45-67"
        required
        value={contactsNumber}
        onChange={handleChange}
        id={numberInputID}
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;

//---------------------------------------------------------------------

// import React, { Component } from "react";
// import { nanoid } from 'nanoid';

// class ContactForm extends Component {
//   state = {
//     name: '',
//     contactsNumber: '',
//   }

//   nameInputID = nanoid();
//   numberInputID = nanoid();

//   handleChange = event => {
//     const {name, value} = event.currentTarget;

//     this.setState({[name]: value});
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     const newContact = {
//       name: this.state.name,
//       number: this.state.contactsNumber,
//     };

//     this.props.onReceiver(newContact);
//     // set-state cleaning after submit
//     this.setState({
//       name: '',
//       contactsNumber: '',
//     });
//   };

//   /* using react lifecycle methods */

//   componentDidUpdate(prevProps) {
//     const { contacts } = this.props;
//     if (contacts !== prevProps.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameInputID}>Name
//               <input
//                 type="text"
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 required
//                 value={this.state.name}
//                 onChange={this.handleChange}
//                 id={this.nameInputID}
//               />
//             </label>

//             <label htmlFor={this.numberInputID}>Number
//               <input
//                 type="tel"
//                 name="contactsNumber"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                 value={this.state.contactsNumber}
//                 onChange={this.handleChange}
//                 id={this.numberInputID}
//               />
              
//             </label>

//             <button type="submit">Add contact</button>
//           </form>
//     );
//   }
// }

// export default ContactForm;
