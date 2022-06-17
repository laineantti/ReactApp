import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';

function Content() {
    return (
        <React.Fragment>
            <Typography color="textPrimary" variant="h1" component="div" gutterBottom>Content</Typography>
            <Typography color="textPrimary" level="body2">This is content page!</Typography>
        </React.Fragment>
    );
};

export default Content;