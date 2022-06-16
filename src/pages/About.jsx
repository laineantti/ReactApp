import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';

function About() {
    return (
        <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <Typography color="textPrimary" variant="h1" component="div" gutterBottom>About</Typography>
                <Typography color="textPrimary" level="body2">This is about page!</Typography>
            </Container>
        </Box>
    );
};

export default About;