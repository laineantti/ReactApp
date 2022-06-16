import React from 'react';
import { Outlet } from "react-router-dom";
import { Box } from '@mui/material';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Box m={1} pt={1}>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;