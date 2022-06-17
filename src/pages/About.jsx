import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';

function About() {
    return (
        <React.Fragment>
            <Typography color="textPrimary" variant="h1" component="div" gutterBottom>About</Typography>
            <Typography color="textPrimary" level="body2">This is about page!</Typography>
        </React.Fragment>
    );
};

export default About;