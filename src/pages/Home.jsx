import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';

function Home() {
    return (
        <React.Fragment>
            <Typography color="textPrimary" variant="h1" component="div" gutterBottom>Welcome!</Typography>
            <Typography color="textPrimary" level="body2">I'm adding features to this app as learning purposes.</Typography>
        </React.Fragment>
    );
};

export default Home;