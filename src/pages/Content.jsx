import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function Content() {
    return (
        <Paper>
            <Typography variant="h1" component="div" gutterBottom>Content</Typography>
            <Typography level="body2">This is content page!</Typography>
        </Paper>
    );
};