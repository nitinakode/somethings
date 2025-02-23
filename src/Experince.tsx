import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';

const experiences = [
  {
    title: "Software Analyst",
    role: "Java Full Stak Develoepr",
    company: "Redshift, Hyderabad, India",
    date: "Jan 2023 – Present",
    responsibilities: [
      "Developed and maintained the Order Management System (OMS) interface, improving order processing by 40%.",
      "Designed and deployed a microservices architecture, reducing manual effort by 80% and downtime by 45%.",
      "Integrated Spring Reactive Programming for asynchronous microservices, enhancing system scalability and responsiveness.",
      "Collaborated with cross-functional teams using agile methodologies to deliver high-quality solutions on time."
    ]
  }
];


const Experience: React.FC = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Experience</Typography>
      <Grid container spacing={4}>
        {experiences.map((exp, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{exp.role}</Typography> 
                {/* <Typography variant="subtitle1" color="textSecondary">{exp.title}</Typography>  */}
                <Typography variant="subtitle1" color="textSecondary">{exp.company}</Typography>
                <Typography variant="body2" color="textSecondary">{exp.date}</Typography>
                <ul>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>
                      <Typography variant="body2">{resp}</Typography>
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

