import React from 'react';
import { Typography, Box, Chip } from '@mui/material';
import skillsJson from './static/Skills.json'

const skills = skillsJson.skills

const Skills: React.FC = () => {
  return (
    <Box sx={{ mt: 4 }}>
      
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>

      {/* Languages */}
      <Typography variant="h6">Languages:</Typography>
      <Box sx={{ mb: 2 }}>
        {skills.languages.map((item) => (
          <Chip key={item} label={item} sx={{ mr: 1 }} />
        ))}
      </Box>

      {/* Backend */}
      <Typography variant="h6">Backend:</Typography>
      <Box sx={{ mb: 2 }}>
        {skills.backend.map((item) => (
          <Chip key={item} label={item} sx={{ mr: 1 }} />
        ))}
      </Box>

      {/* Architecture */}
      <Typography variant="h6">Architecture:</Typography>
      <Box sx={{ mb: 2 }}>
        {skills.architecture.map((item) => (
          <Chip key={item} label={item} sx={{ mr: 1 }} />
        ))}
      </Box>

      {/* Messaging */}
      <Typography variant="h6">Messaging:</Typography>
      <Box sx={{ mb: 2 }}>
        {skills.messaging.map((item) => (
          <Chip key={item} label={item} sx={{ mr: 1 }} />
        ))}
      </Box>

      {/* Databases */}
      <Typography variant="h6">Databases:</Typography>
      <Box sx={{ mb: 2 }}>
        {skills.databases.map((item) => (
          <Chip key={item} label={item} sx={{ mr: 1 }} />
        ))}
      </Box>

      {/* Tools & DevOps */}
      <Typography variant="h6">Tools & DevOps:</Typography>
      <Box sx={{ mb: 2 }}>
        {skills.toolsDevOps.map((item) => (
          <Chip key={item} label={item} sx={{ mr: 1 }} />
        ))}
      </Box>

      {/* Testing */}
      <Typography variant="h6">Testing:</Typography>
      <Box sx={{ mb: 2 }}>
        {skills.testing.map((item) => (
          <Chip key={item} label={item} sx={{ mr: 1 }} />
        ))}
      </Box>

      {/* Monitoring & API */}
      <Typography variant="h6">Monitoring & API:</Typography>
      <Box sx={{ mb: 2 }}>
        {skills.monitoringApi.map((item) => (
          <Chip key={item} label={item} sx={{ mr: 1 }} />
        ))}
      </Box>

      {/* Frontend */}
      <Typography variant="h6">Frontend:</Typography>
      <Box sx={{ mb: 2 }}>
        {skills.frontend.map((item) => (
          <Chip key={item} label={item} sx={{ mr: 1 }} />
        ))}
      </Box>

    </Box>
  );
};

export default Skills;