import React from "react";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@material-ui/core/Button';

export default function Navbar() {
  return (
    <Stack sx={{ padding: "20px" }} direction="row" spacing={2}>
      <Avatar alt="logo" src="images/logo.png" />
      <Link to="/"><Button>Home</Button></Link>
      <Link to="/content"><Button>Content</Button></Link>
      <Link to="/about"><Button>About</Button></Link>
    </Stack>
  );
}