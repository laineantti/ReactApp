import React from 'react';
import { Box, Container, Card, CardContent, CardMedia, Typography } from '@mui/material';

function NoPage() {
    return (
        <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg" >
                <Card sx={{ display: 'flex', width: '505px', height: 'auto' }}>
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
                        image="images/404.gif"
                        alt="Tux"
                    />
                </Card>
            </Container>
        </Box>
    );
};

export default NoPage;