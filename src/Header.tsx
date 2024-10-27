import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Nitin Akode
        </Typography>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/about" color="inherit">About</Button>
        <Button component={Link} to="/skills" color="inherit">Skills</Button>
        <Button component={Link} to="/experience" color="inherit">Experience</Button>
        <Button component={Link} to="/projects" color="inherit">Projects</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
