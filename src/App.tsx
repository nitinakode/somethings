import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Container, Box } from '@mui/material';
import About from './About';
import Experience from './Experince';
import Header from './Header';
import Projects from './Projects';
import Skills from './skills';
import Complete from './Complete';

const App: React.FC = () => {
  return (
    <Router>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />

        <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Complete />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Container>
        
      </Box>
    </Router>
  );
};

export default App;
