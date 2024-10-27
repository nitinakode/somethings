import React from 'react';

import {  Box } from '@mui/material';
import About from './About';
import Experience from './Experince';
import Footer from './Footer';

import Home from './Home';
import Projects from './Projects';
import Skills from './skills';

const Complete: React.FC = () => {
  return (
   
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
       
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </Box>

  );
};

export default Complete;
