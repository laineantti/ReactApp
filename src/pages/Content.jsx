import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export default function Content() {
    return (
        <Paper>
            <Typography variant="h1" component="div" gutterBottom>Content</Typography>
            <Typography level="body2">This is content page!</Typography>
        </Paper>
    );
};