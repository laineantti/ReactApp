import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export default function About() {
    return (
        <Paper>
            <Typography variant="h1" component="div" gutterBottom>About</Typography>
            <Typography level="body2">This is about page!</Typography>
        </Paper>
    );
};