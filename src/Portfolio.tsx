import React from 'react';
import { Typography, Box, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';

const skills = {
  programmingLanguages: ["Java", "TypeScript", "HTML", "CSS"],
  frameworks: ["React", "Spring Boot", "Spring Batch", "Spring Security", "Spring Integration", "Hibernate", "Spring MVC", "Spring AOP", "Spring Cloud", "Spring Web", "Spring WebFlux", "Spring Data JPA"],
  tools: ["Docker", "Jenkins", "Kubernetes", "Swagger", "Postman", "SFTP", "Dynatrace", "Splunk", "VS Code", "IntelliJ", "Eclipse", "Maven", "Jira"],
  databases: ["MySQL", "PostgreSQL"],
  others: ["Material UI", "Bootstrap", "API Gateway", "Eureka", "Flyway", "JSP", "Servlets", "JSON", "JUnit", "ActiveMQ", "Kafka", "DQL"],
  cloudPlatforms: ["DigitalOcean"],
  versionControl: ["Git", "GitHub", "Bitbucket"]
};

const experiences = [
  {
    title: "Associate Software Analyst",
    company: "Redshift, Hyderabad, India",
    date: "Jan 2023 – Present",
    responsibilities: [
      "Developed and maintained an Order Management System (OMS) interface, automating batch processes and integrating data handling with SFTP and ActiveMQ, improving order processing efficiency by 40% and significantly reducing manual intervention.",
      "Optimized system performance by designing and deploying a microservices architecture, streamlining business assessments, and reducing manual effort by 80%. Implemented real-time tracking and error monitoring with Dynatrace, achieving a 45% reduction in downtime.",
      "Collaborated with cross-functional teams to refine product features and resolve technical challenges, ensuring timely delivery of high-quality solutions while adhering to agile methodologies and maintaining code quality through automated testing.",
      "Created Dynatrace dashboards for OMS interfaces, enhancing monitoring and reporting capabilities."
    ]
  },
  {
    title: "Full Stack Developer (Freelancer)",
    company: "Remote",
    date: "Oct 2022 – Dec 2022",
    responsibilities: [
      "Developed a fully responsive e-commerce platform using React for the frontend, enhancing the user experience with smooth navigation and secure user authentication.",
      "Designed and implemented a secure backend with Spring Boot, efficiently handling product management, customer operations, and order processing.",
      "Integrated JWT-based authentication for user sessions, ensuring secure access and automated token management."
    ]
  }
];

const Portfolio: React.FC = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>About Me</Typography>
      <Typography>
        I am a passionate Full Stack Java Developer with experience in building scalable web applications.
      </Typography>

      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>Skills</Typography>
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

      <Typography variant="h6">Others:</Typography>
      <Box sx={{ mb: 2 }}>
        {skills.others.map((other) => <Chip key={other} label={other} sx={{ mr: 1 }} />)}
      </Box>

      <Typography variant="h6">Cloud Platforms:</Typography>
      <Box sx={{ mb: 2 }}>
        {skills.cloudPlatforms.map((cloud) => <Chip key={cloud} label={cloud} sx={{ mr: 1 }} />)}
      </Box>

      <Typography variant="h6">Version Control:</Typography>
      <Box sx={{ mb: 2 }}>
        {skills.versionControl.map((vc) => <Chip key={vc} label={vc} sx={{ mr: 1 }} />)}
      </Box>

      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>Experience</Typography>
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

      <Typography variant="h5" sx={{ mt: 4 }}>Contact</Typography>
      <Typography>Email: nitin@example.com</Typography>
      <a href="/resume.pdf" download>
        <Typography variant="body1" sx={{ mt: 2, display: 'inline-block' }}>
          Download Resume
        </Typography>
      </a>
    </Box>
  );
};

export default Portfolio;
