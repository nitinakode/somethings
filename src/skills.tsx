import React from 'react';
import { Typography, Box, Chip } from '@mui/material';

const skills = {
  programmingLanguages: ["Java", "TypeScript", "HTML", "CSS"],
  frameworks: ["React", "Spring Boot", "Hibernate", "Spring MVC"],
  tools: ["Docker", "Jenkins", "Kubernetes", "Postman"],
  databases: ["MySQL", "PostgreSQL"],
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

        <Typography variant="h6">Tools:</Typography>
        <Box sx={{ mb: 2 }}>
          {skills.tools.map((tool) => <Chip key={tool} label={tool} sx={{ mr: 1 }} />)}
        </Box>

        <Typography variant="h6">Databases:</Typography>
        <Box sx={{ mb: 2 }}>
          {skills.databases.map((db) => <Chip key={db} label={db} sx={{ mr: 1 }} />)}
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
