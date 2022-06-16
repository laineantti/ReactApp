import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';

function Home() {
    return (
        <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <Typography color="textPrimary" variant="h1" component="div" gutterBottom>Welcome!</Typography>
                <Typography color="textPrimary" level="body2">I'm adding features to this app as learning purposes.</Typography>
            </Container>
        </Box>
    );
};

export default Home;