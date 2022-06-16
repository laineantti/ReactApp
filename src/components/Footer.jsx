import React from "react";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Typography from '@material-ui/core/Typography';

export default function Footer() {
    return (
        <Stack sx={{ padding: "20px" }} direction="row" spacing={2}>
            <Typography variant="body2" color="textSecondary" align="center">
                {"© " + (new Date().getFullYear()) + " "}
                <Link to="/about">ReactApp</Link>
                {" All rights reserved."}
                
            </Typography>
        </Stack>
    );
}