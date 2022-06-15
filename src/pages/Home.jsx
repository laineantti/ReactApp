import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export default function Home() {
    return (
        <Paper>
            <Typography variant="h1" component="div" gutterBottom>Welcome!</Typography>
            <Typography level="body2">I'm adding features to this app as learning purposes.</Typography>
        </Paper>
    );
};