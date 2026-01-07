import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material'
import SkillsBanner from './SkillsBanner'

const skillsData = [
  {
    title: 'React',
    description: 'Création d’interfaces dynamiques, composants réutilisables, gestion du state avec Hooks.',
    demoLink: '#'
  },
  {
    title: 'Symfony',
    description: 'Backend robuste, API RESTful, gestion des routes et des entités.',
    demoLink: '#'
  },
  {
    title: 'Spring Boot',
    description: 'Microservices, API REST, intégration base de données et sécurité.',
    demoLink: '#'
  }
]

const Skills = () => {
  return (

    
    <Container sx={{ mt: 4 }}>
        <SkillsBanner />
      <Typography variant="h4" gutterBottom>
        Mes Skills & Démonstrations
      </Typography>

      <Grid container spacing={3}>
        {skillsData.map((skill) => (
          <Grid item xs={12} md={4} key={skill.title}>
            <Card sx={{ minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {skill.title}
                </Typography>
                <Typography>{skill.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  href={skill.demoLink}
                  target="_blank"
                >
                  Voir la démo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Skills
