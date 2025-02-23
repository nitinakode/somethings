import React from 'react';
import { Typography, Box } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box >
      {/* About Section */}
      <Box sx={{ mt: 4 }}>
        
      <Typography variant="h4" gutterBottom>About Me</Typography>
<Typography>
  I am a dynamic Full Stack Developer with over 2 years of experience specializing in Java, Spring Boot, React, and microservices.
  Holding a Bachelor of Technology degree in Electronics and Communication Engineering, I have built scalable applications that enhance 
  business efficiency. I have a strong technical foundation and have worked extensively on projects such as optimizing Order Management 
  Systems (OMS), creating full-stack microservices applications, and developing feature-rich e-commerce platforms.
</Typography>
<Typography sx={{ mt: 2 }}>
  My expertise lies in designing and implementing both backend and frontend solutions, integrating cutting-edge technologies such as 
  Spring Reactive Programming and microservices architecture. I thrive in collaborative, cross-functional team environments, continuously 
  improving systems to meet evolving project needs. I am always eager to learn new technologies and stay updated on industry trends.
</Typography>
<Typography sx={{ mt: 2 }}>
  Outside of work, I enjoy coding, reading about new tech innovations, playing cricket, and writing poetry. These activities keep me inspired 
  and motivated to continue growing as a developer.
</Typography>
</Box>
    </Box>
    
  );
};

export default About;
