import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from '@mui/material';

const Layout = () => {
  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Navbar sx={{ width: '100%', height: '50px' }} />
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', marginTop: '50px' }}>
        <Box sx={{ margin: '20px' }}>
          <Outlet sx={{ flexGrow: 1 }} />
        </Box>
      </Box>
      <Footer sx={{ width: '100%' }} />
    </Box>
  );
};

export default Layout;