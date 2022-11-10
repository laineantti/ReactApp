import React from 'react';
import { Box, Container, Card, CardContent, CardMedia, Typography } from '@mui/material';

function NoPage() {
    return (
        <React.Fragment>
            <Card sx={{ display: 'flex', width: '505px', maxWidth: '100%', height: 'auto', marginTop: '35px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography color="textPrimary" component="div" variant="h5">
                            404 - Page not found!
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 240 }}
                    image={process.env.PUBLIC_URL + '/images/404.gif'}
                    alt="Tux"
                />
            </Card>
        </React.Fragment>
    );
};

export default NoPage;