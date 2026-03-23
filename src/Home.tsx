import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import HomeJsonData from "./static/Home.json";
import ProfilePic from './1.png'; // import image normally

const homeData = HomeJsonData;

const Home: React.FC = () => {
  const handleResumeDownload = () => {
    const downloadLink = `https://drive.google.com/uc?export=download&id=${homeData.resume.fileId}`;
    window.location.href = downloadLink;
  };

  const handleResumeView = () => {
    window.open(homeData.resume.viewLink, "_blank"); // use JSON viewLink directly
  };

  return (
    <Box sx={{ mt: 4, p: 2 }}>
      <Grid container spacing={2} alignItems="center">
        
        <Grid item xs={12} md={6}>
          
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
            {homeData.greeting}
          </Typography>

          <Typography variant="h5" sx={{ mt: 2, color: '#555' }}>
            {homeData.role}
          </Typography>

          {homeData.description.map((para, index) => (
            <Typography key={index} sx={{ mt: 2, color: '#777' }}>
              {para}
            </Typography>
          ))}

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3, mr: 2 }}
            onClick={handleResumeView}
          >
            View Resume
          </Button>

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
            src={ProfilePic} // React imports image, JSON only handles text
            alt="Nitin Akode"
            style={{
              height: '450px',
              maxWidth: '320px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
            }}
          />
        </Grid>

      </Grid>
    </Box>
  );
};

export default Home;