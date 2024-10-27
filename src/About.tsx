import React from 'react';
import { Typography, Box } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box >
      {/* About Section */}
      <Box sx={{ mt: 4 }}>
        
        <Typography variant="h4" gutterBottom>About Me</Typography>
        <Typography>
          I am a dedicated Full Stack Java Developer with a Bachelor of Technology in Electronics and Communication Engineering.
          I have a strong background in developing scalable web applications using a variety of frameworks and tools, including 
          React, Spring Boot, and RESTful APIs. My experience spans across designing user-friendly interfaces, building 
          robust backends, and collaborating with cross-functional teams to deliver high-quality solutions.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          I am always eager to learn new technologies and improve my skills, making me adaptable to evolving project requirements.
          In my free time, I enjoy coding, reading about new tech trends, and playing cricket.
        </Typography>
      </Box>
    </Box>
    
  );
};

export default About;
