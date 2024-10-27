import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';

const experiences = [
  {
    title: "Associate Software Analyst",
    company: "Redshift, Hyderabad, India",
    date: "Jan 2023 – Present",
    responsibilities: [
      "Developed and maintained an Order Management System (OMS) interface, improving order processing efficiency by 40%.",
      "Optimized system performance by designing and deploying a microservices architecture, reducing manual effort by 80%.",
      "Collaborated with cross-functional teams to refine product features, ensuring timely delivery of high-quality solutions."
    ]
  },
  {
    title: "Full Stack Developer (Freelancer)",
    company: "Remote",
    date: "Oct 2022 – Dec 2022",
    responsibilities: [
      "Developed a fully responsive e-commerce platform using React for the frontend.",
      "Designed and implemented a secure backend with Spring Boot, efficiently handling product management.",
      "Integrated JWT-based authentication for user sessions."
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
                <Typography variant="h6">{exp.title}</Typography>
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
