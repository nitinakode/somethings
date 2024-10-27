import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import ProfilePic from './1.png'
const Home: React.FC = () => {
  const handleResumeDownload = () => {
    window.open('/Nitin_Akode_Java_Full_Stack_Developer.pdf', '_blank'); // Update with your actual resume path
  };

  return (
    <Box sx={{ mt: 4, p: 2 }}>
      {/* Home Section */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
            Welcome to My Portfolio
          </Typography>
          <Typography variant="h5" sx={{ mt: 2, color: '#555' }}>
            I'm Nitin Akode, a Java Full Stack Developer with a passion for building innovative web applications.
          </Typography>
          <Typography sx={{ mt: 2, color: '#777' }}>
            With expertise in Java, Spring Boot, and React, I aim to create user-centric solutions that make a difference. 
            Explore my work and let's connect!
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ mt: 3 }} 
            onClick={handleResumeDownload}
          >
            Download Resume
          </Button>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <img 
            src={ProfilePic}
            alt="Programmer" 
            style={{ height:'450px', maxWidth: '320px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} 
          />
        </Grid>
      </Grid>

     
    </Box>
  );
};

export default Home;
