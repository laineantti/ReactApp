import React from "react";
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {"React + Material UI"}
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    {"Design by laineantti"}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    {"© " + (new Date().getFullYear()) + " "}
                    <Link to="/about">ReactApp</Link>
                    {" All rights reserved."}
                </Typography>
            </Container>
        </Box>
    );
}