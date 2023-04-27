import React from 'react'
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction"
import IconButton from "@mui/material/IconButton"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./ContactCard.css"


const ContactCard = ({ contacts, deleteContact, editContacts }) => {

    return (
        <TransitionGroup>
            {contacts.map((contact) => (
                <CSSTransition key={contact.id} timeout={500} classNames="fade">
                    <List sx={{ backgroundColor: 'lightpink', color: 'blue', margin: '10px 0' }}>
                        <ListItem>
                            <ListItemText primary={contact.name} secondary={contact.email} />
                            <ListItemSecondaryAction>
                                <IconButton onClick={() => deleteContact(contact.id)}>
                                    <DeleteOutlineOutlinedIcon />
                                </IconButton>
                                <IconButton onClick={() => editContacts(contact.id)}>
                                    <EditOutlinedIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}

export default ContactCard