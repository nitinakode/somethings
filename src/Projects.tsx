import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import Portfolio from './portfolio.png';
const projects = [
  {
    name: "Personal Portfolio",
    imageUrl: Portfolio,
    description: "Welcome to my portfolio! I’m a Full Stack Java Developer with expertise in Java, React, and Spring Boot. Here, you can explore my projects, skills, and experience, showcasing my ability to create scalable, user-centric web applications.",
    githubLink: "https://ntinakodeportfolio.netlify.app/",

  },
  {
    name: "Admin Service",
    githubLink: "https://github.com/nitinakode/admin-service",
    imageUrl: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png",
    description: "JWT Authentication and Authorization with Spring Security "
  },
  {
    name: "Redis Cache",
    githubLink: "https://github.com/nitinakode/redis-cache",
    imageUrl: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png",
    description: "Implementation of products service using redis cache"
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
  const handleProjectClick = (project: any) => {
 if(project.githubLink){
    window.open(project.githubLink, '_blank');
 }
 if(!project.githubLink){
  alert("GitHub and live links for this project were not added")
  
 }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Projects</Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={1000} sm={7} md={4} key={index}>
            <Card onClick={() => handleProjectClick(project)} sx={{ cursor: 'pointer' }}>
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
