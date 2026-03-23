import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';
import Experiences from './static/Experience.json'
const experiences = Experiences

const Experience: React.FC = () => {
  return (
    <Box sx={{ mt: 4 }}>
      
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>

      <Grid container spacing={4}>
        {experiences.map((exp, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                
                <Typography variant="h6">
                  {exp.role}
                </Typography>

                <Typography variant="subtitle1" color="textSecondary">
                  {exp.company}
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  {exp.date}
                </Typography>

                <ul>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>
                      <Typography variant="body2">
                        {resp}
                      </Typography>
                    </li>
                  ))}
                </ul>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
};

export default Experience;