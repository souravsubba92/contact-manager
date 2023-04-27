import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputBox from "./components/InputBox"
import ContactCard from "./components/ContactCard"
import Container from "@mui/material/Container"
import Typography from '@mui/material/Typography';
import SnackAlert from './components/SnackAlert';



const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [{ id: uuidv4(), name: "Sourav", email: "xyz@gmail.com" }];
  });

  const [editableContact, setEditableContact] = useState(null)

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAlertClose = () => {
    setAlertOpen(false);
  }

  const addContacts = (contact) => {
    if (contact.name.length > 0 && contact.email.length > 0) {
      setContacts([...contacts, { ...contact, id: uuidv4() }])
    } else {
      setAlertMessage('Name and email fields cannot be empty');
      setAlertOpen(true);
    }
  }

  const editContacts = (id) => {
    setEditableContact(contacts.find(contact => contact.id === id))
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  const updateContact = (updateContact) => {
    if (updateContact.name.length > 0 && updateContact.email.length > 0) {
      setContacts(contacts.map(contact => contact.id === updateContact.id ? updateContact : contact))
      setEditableContact(null)
    } else {
      setAlertMessage('Name and email fields cannot be empty');
      setAlertOpen(true);
    }
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" style={{ marginTop: '2rem', color: '#3f51b5' }}>
        Contact List
      </Typography>
      <InputBox addContacts={addContacts} editableContact={editableContact} updateContact={updateContact} />
      <ContactCard contacts={contacts} deleteContact={deleteContact} editContacts={editContacts} />
      <SnackAlert
        alertOpen={alertOpen} handleAlertClose={handleAlertClose} alertMessage={alertMessage} />
    </Container>
  );
}

export default App;