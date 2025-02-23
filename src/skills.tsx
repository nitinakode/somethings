import React from 'react';
import { Typography, Box, Chip } from '@mui/material';

const skills = {
  programmingLanguages: ["Java", "TypeScript", "HTML", "CSS"],
  frameworks: [
    "React", "Spring Boot", "Spring Batch", "Spring Security", "Spring Integration", "Hibernate", 
    "Spring MVC", "Spring AOP", "Spring Cloud", "Spring Web", "Spring Data JPA"
  ],
  microservices: ["API Gateway", "Eureka", "Spring Cloud"],
  reactiveProgramming: ["Spring WebFlux", "Spring Reactive"],
  monitoringTools: ["Splunk", "Dynatrace"],
  testingFrameworks: ["JUnit", "Mockito"],
  messagingAndDataTransfer: ["ActiveMQ", "SFTP", "Pub/Sub"],
  tools: ["Docker", "Swagger", "Postman", "VS Code", "IntelliJ", "Eclipse", "Maven", "Jira"],
  webServices: ["RESTful APIs"],
  databases: ["MySQL", "PostgreSQL"],
  cloudPlatforms: ["DigitalOcean", "Netlify"],
  versionControl: ["Git", "GitHub", "Bitbucket"],
  softSkills: ["Communication", "Teamwork", "Problem Solving", "Adaptability"]
};


const Skills: React.FC = () => {
  return (
    <Box sx={{ mt: 4 }}>
  <Typography variant="h4" gutterBottom>Skills</Typography>
  <Box>
    <Typography variant="h6">Programming Languages:</Typography>
    <Box sx={{ mb: 2 }}>
      {skills.programmingLanguages.map((lang) => <Chip key={lang} label={lang} sx={{ mr: 1 }} />)}
    </Box>

    <Typography variant="h6">Frameworks:</Typography>
    <Box sx={{ mb: 2 }}>
      {skills.frameworks.map((framework) => <Chip key={framework} label={framework} sx={{ mr: 1 }} />)}
    </Box>

    <Typography variant="h6">Microservices:</Typography>
    <Box sx={{ mb: 2 }}>
      {skills.microservices.map((microservice) => <Chip key={microservice} label={microservice} sx={{ mr: 1 }} />)}
    </Box>

    <Typography variant="h6">Reactive Programming:</Typography>
    <Box sx={{ mb: 2 }}>
      {skills.reactiveProgramming.map((reactive) => <Chip key={reactive} label={reactive} sx={{ mr: 1 }} />)}
    </Box>

    <Typography variant="h6">Monitoring Tools:</Typography>
    <Box sx={{ mb: 2 }}>
      {skills.monitoringTools.map((tool) => <Chip key={tool} label={tool} sx={{ mr: 1 }} />)}
    </Box>

    <Typography variant="h6">Testing Frameworks:</Typography>
    <Box sx={{ mb: 2 }}>
      {skills.testingFrameworks.map((framework) => <Chip key={framework} label={framework} sx={{ mr: 1 }} />)}
    </Box>

    <Typography variant="h6">Messaging & Data Transfer:</Typography>
    <Box sx={{ mb: 2 }}>
      {skills.messagingAndDataTransfer.map((item) => <Chip key={item} label={item} sx={{ mr: 1 }} />)}
    </Box>

    <Typography variant="h6">Tools:</Typography>
    <Box sx={{ mb: 2 }}>
      {skills.tools.map((tool) => <Chip key={tool} label={tool} sx={{ mr: 1 }} />)}
    </Box>

    <Typography variant="h6">Web Services:</Typography>
    <Box sx={{ mb: 2 }}>
      {skills.webServices.map((service) => <Chip key={service} label={service} sx={{ mr: 1 }} />)}
    </Box>

    <Typography variant="h6">Databases:</Typography>
    <Box sx={{ mb: 2 }}>
      {skills.databases.map((db) => <Chip key={db} label={db} sx={{ mr: 1 }} />)}
    </Box>

    <Typography variant="h6">Cloud Platforms:</Typography>
    <Box sx={{ mb: 2 }}>
      {skills.cloudPlatforms.map((platform) => <Chip key={platform} label={platform} sx={{ mr: 1 }} />)}
    </Box>

    <Typography variant="h6">Version Control:</Typography>
    <Box sx={{ mb: 2 }}>
      {skills.versionControl.map((version) => <Chip key={version} label={version} sx={{ mr: 1 }} />)}
    </Box>

    <Typography variant="h6">Soft Skills:</Typography>
    <Box sx={{ mb: 2 }}>
      {skills.softSkills.map((skill) => <Chip key={skill} label={skill} sx={{ mr: 1 }} />)}
    </Box>
  </Box>
</Box>

  );
};

export default Skills;
