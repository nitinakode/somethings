import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const projects = [
  {
    name: "Project 1",
    imageUrl: "https://via.placeholder.com/300",
    description: "Description of Project 1."
  },
  {
    name: "Project 2",
    imageUrl: "https://via.placeholder.com/300",
    description: "Description of Project 2."
  },
  {
    name: "Project 3",
    imageUrl: "https://via.placeholder.com/300",
    description: "Description of Project 3."
  },
  {
    name: "Project 4",
    imageUrl: "https://via.placeholder.com/300",
    description: "Description of Project 4."
  },
  {
    name: "Project 5",
    imageUrl: "https://via.placeholder.com/300",
    description: "Description of Project 5."
  },
  {
    name: "Project 6",
    imageUrl: "https://via.placeholder.com/300",
    description: "Description of Project 6."
  },
  {
    name: "Project 7",
    imageUrl: "https://via.placeholder.com/300",
    description: "Description of Project 7."
  },
  {
    name: "Project 8",
    imageUrl: "https://via.placeholder.com/300",
    description: "Description of Project 8."
  },
  {
    name: "Project 9",
    imageUrl: "https://via.placeholder.com/300",
    description: "Description of Project 9."
  }
];

const Projects: React.FC = () => {
  const handleProjectClick = (description: string) => {
    alert("I haven't added anything yet");
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Projects</Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card onClick={() => handleProjectClick(project.description)} sx={{ cursor: 'pointer' }}>
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
                alt={project.name}
              />
              <CardContent>
                <Typography variant="h6">{project.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
