import React, { useState, useEffect } from 'react'
import { Button, TextField, Grid, } from '@mui/material';

// const intialState = {
//     name: "",
//     email: ""
// }

const InputBox = ({ addContacts, editableContact, updateContact }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // useEffect(() => {
    //     if (editableContact) {
    //         setName(editableContact.name);
    //         setEmail(editableContact.email);
    //     }
    // }, [editableContact]);

    // const onSubmit = () => {
    //     if (editableContact) {
    //         updateContact({ id: editableContact.id, name, email });
    //     } else {
    //         addContacts({ name, email });
    //     }
    //     setName('');
    //     setEmail('');
    // };
    useEffect(() => {
        if (editableContact) {
            setName(editableContact.name)
            setEmail(editableContact.email)
        }
    }, [editableContact])
    const onSubmit = () => {
        if (editableContact) {
            updateContact({ id: editableContact.id, name, email })
        } else {
            addContacts({ name, email })
        }
        setName("")
        setEmail("")
    }

    return (
        <>  <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} style={{ backgroundColor: '#f8bbd0' }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} style={{ backgroundColor: '#f8bbd0' }}
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={onSubmit}>
                    {editableContact ? 'Update Contact' : 'Add Contact'}
                </Button>
            </Grid>
        </Grid>

        </>)
}

export default InputBox

