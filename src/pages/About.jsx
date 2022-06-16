import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


export default function About() {
    return (
        <Paper>
            <Typography variant="h1" component="div" gutterBottom>About</Typography>
            <Typography level="body2">This is about page!</Typography>
        </Paper>
    );
};