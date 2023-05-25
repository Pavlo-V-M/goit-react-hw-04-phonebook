import PropTypes from 'prop-types';
import React from 'react';
// import { nanoid } from 'nanoid';

const ContactList = props => {
  const { contacts, onDelete } = props;
  
  return ( 
  <div>
    <ul>
      {contacts.map(contact => (
        <li key={contact.name}>
          {contact.name}: <span>{contact.number}</span>
          <button type="button" onClick={() => onDelete(contact.name)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
  );
};

ContactList.propTypes = {
contacts: PropTypes.array.isRequired,
onDelete: PropTypes.func.isRequired,
};

export default ContactList;
