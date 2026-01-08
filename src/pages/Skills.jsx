import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material'
import SkillsBanner from './SkillsBanner'
import architectureSkills from '../assets/architectureSkills.png'


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

        <Typography
        variant="h5"
        align="center"
        sx={{ mt: 4, mb: 2, fontWeight: 500 }}
        >
        Architecture & compétences mises en œuvre
        </Typography>

        <Grid container justifyContent="center" sx={{ my: 6 }}>
        <Grid item xs={12} sm={10} md={8}>
            <Typography
            variant="h5"
            align="center"
            sx={{ mb: 2, fontWeight: 500, px: 2 }}
            >
            Architecture & compétences mises en œuvre
            </Typography>
            <img
            src={architectureSkills}
            alt="Architecture full-stack React Spring Boot MySQL déployée sur Railway"
            style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                maxWidth: '100%'
            }}
            />
        </Grid>
        </Grid>

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
