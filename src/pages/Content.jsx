import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';

function Content() {
    return (
        <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <Typography color="textPrimary" variant="h1" component="div" gutterBottom>Content</Typography>
                <Typography color="textPrimary" level="body2">This is content page!</Typography>
            </Container>
        </Box>
    );
};

export default Content;