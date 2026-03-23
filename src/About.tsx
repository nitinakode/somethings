import React from 'react';
import { Typography, Box } from '@mui/material';
import AboutData from './static/about.json'
// JSON data for About section
const aboutData = AboutData

const About: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          {aboutData.title}
        </Typography>

        {aboutData.paragraphs.map((para, index) => (
          <Typography key={index} sx={{ mt: index === 0 ? 0 : 2 }}>
            {para}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default About;