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

        <Grid container justifyContent="center" sx={{ my: 6 }}>
            <Grid item xs={12} sm={10} md={8}>
                <Typography
                variant="h5"
                align="center"
                sx={{ mb: 2, fontWeight: 500, px: 2 }}
                >
                Architecture & compétences mises en œuvre pour ce portfolio 
                ( il ne s'agit pas d'une simple page statique ! )
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

                {/* Paragraph with GitHub links */}
                <Typography
                variant="body1"
                align="center"
                sx={{ mt: 3, px: 2 }}
                >
                Consulter les projets sur GitHub :{' '}
                <a
                    href="https://github.com/fredericbalcer/portfolio/tree/main/src/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Frontend
                </a>{' '}
                |{' '}
                <a
                    href="https://github.com/fredericbalcer/portfolio-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Backend
                </a>
                </Typography>                
            </Grid>
        </Grid>
    </Container>
  )
}

export default Skills
