import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SnackAlert = ({ alertOpen, handleAlertClose, alertMessage }) => {
    return (
        <Snackbar open={alertOpen} autoHideDuration={3000} onClose={handleAlertClose}>
            <Alert severity="error" onClose={handleAlertClose}>
                {alertMessage}
            </Alert>
        </Snackbar>
    )
}

export default SnackAlert