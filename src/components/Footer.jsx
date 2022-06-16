import React from "react";
import { Typography, Box, Container, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    <Link href="https://reactjs.org/">React</Link>
                    {" + "}
                    <Link href="https://mui.com/">MUI</Link>
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    {"Design by "}
                    <Link href="https://github.com/laineantti">laineantti</Link>
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    {"© " + (new Date().getFullYear()) + " ReactApp All rights reserved."}
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;