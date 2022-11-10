import React from 'react';
import { Link } from "react-router-dom";
import { Avatar, Button, AppBar, Toolbar, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Box m={1}>
          <Avatar
            alt="logo"
            src={process.env.PUBLIC_URL + '/images/logo.png'}
          />
        </Box>
        <Box m={1}>
          <Button component={Link} to={process.env.PUBLIC_URL + '/'} variant="contained" color="primary">Home</Button>
        </Box>
        <Box m={1}>
          <Button component={Link} to={process.env.PUBLIC_URL + '/content'} variant="contained" color="primary">Naatti News</Button>
        </Box>
        <Box m={1}>
          <Button component={Link} to={process.env.PUBLIC_URL + '/about'} variant="contained" color="primary">About</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;