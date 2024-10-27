import React from 'react';
import { Box, Typography, Link, Grid, Paper } from '@mui/material';
import { Email, Phone, GitHub, LinkedIn, Language, Code } from '@mui/icons-material';

const PersonalDetails: React.FC = () => {
  return (
    <Box sx={{ mt: 4, borderRadius: '8px' }}>
      <Typography variant="h4"  gutterBottom>
        Personal Details
      </Typography>
      <Paper elevation={3} sx={{ p: 2, borderRadius: '8px', backgroundColor: '#ffffff' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
              <Email sx={{ mr: 1, color: '#1976d2' }} /> Email:
              <Link href="mailto:nitinakode@gmail.com" color="primary" sx={{ ml: 1 }}>
                nitinakode@gmail.com
              </Link>
            </Typography>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <Phone sx={{ mr: 1, color: '#1976d2' }} /> Mobile:
              <Link href="tel:+91 8885233399" color="primary" sx={{ ml: 1 }}>
                +91 8885233399
              </Link>
            </Typography>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <Language sx={{ mr: 1, color: '#1976d2' }} /> Address:
              <Typography sx={{ ml: 1 }}>Hyderabad, India</Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Connect with Me</Typography>
            <Grid container spacing={1}>
              <Grid item>
                <Link href="https://www.linkedin.com/in/nitin-akode-22a2831a7/" color="inherit" target="_blank" rel="noopener">
                  <LinkedIn sx={{ mr: 0.5, color: '#1976d2' }} /> LinkedIn
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://github.com/yourprofile" color="inherit" target="_blank" rel="noopener">
                  <GitHub sx={{ mr: 0.5, color: '#1976d2' }} /> GitHub
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://leetcode.com/u/nitinakode/" color="inherit" target="_blank" rel="noopener">
                  <Code sx={{ mr: 0.5, color: '#1976d2' }} /> LeetCode
                </Link>
              </Grid>
              <Grid item>
                 <Link 
            href="https://www.hackerrank.com/profile/akodenitin" // Replace with your HackerRank profile URL
            color="inherit" 
            target="_blank" 
            rel="noopener noreferrer" // Note: Use "noreferrer" for added security
        >
            <Code sx={{ mr: 0.5, color: '#1976d2' }} /> HackerRank
        </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Typography variant="body2" sx={{ mt: 2, textAlign: 'center', color: '#555' }}>
        &copy; 2024 Nitin Akode
      </Typography>
    </Box>
  );
};

export default PersonalDetails;
