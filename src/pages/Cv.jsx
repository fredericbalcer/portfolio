import { Container, Typography, Grid, Button, Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab'
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import { useState, useEffect } from 'react'
import Chip from '@mui/material/Chip';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';




const Cv = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
     
    //fetch('http://192.168.1.24:8088/api/experiences')
    fetch(`${process.env.REACT_APP_API_URL}/api/experiences`)
      .then(res => res.json())
      .then(data => setExperiences(data))
      .catch(err => console.error('Erreur fetch:', err));
  }, []);

  return (
    <Container maxWidth={false} sx={{ px: 2 }}>
        <Typography
        variant="subtitle1"
        gutterBottom
        align="center"
        sx={{
            mt: -6,
            mb: 2,
            fontSize: {
            xs: '1rem',   // mobile
            sm: '1.25rem', // tablette
            md: '1.5rem', // desktop moyen
            lg: '2rem'    // grand écran
            }
        }}
        >
        Développeur Fullstack React / Spring
        </Typography>
        <hr />

      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2,
        fontSize: {
            xs: '1rem',   // mobile
            sm: '1.25rem', // tablette
            md: '1.5rem', // desktop moyen
            lg: '2rem'    // grand écran
            }
      }}>
        Parcours professionnel
      </Typography>

<Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >       {/* EXPÉRIENCE */}

    {experiences.map((exp, index) => (
        <TimelineItem key={index}>
            <TimelineSeparator>
                <TimelineDot color="secondary" />
                {index < experiences.length - 1 && <TimelineConnector />}                
            </TimelineSeparator>

            <TimelineContent
                sx={{
                    px: 2,
                    maxWidth: '100%',
                    width: '100%'
                }}
            >

            <Accordion sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box>
                  <Typography variant="h6">
                    {exp.societe}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {exp.periode}
                  </Typography>
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <Typography gutterBottom  fontWeight="bold">
                  {exp.fonction}
                </Typography>

                <ul>
                    {exp.realisations.map((rea) => (
                    <Box key={rea.id} sx={{ mb: 2 }}>

                        
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <FiberManualRecordIcon
                        sx={{
                        fontSize: 10,
                        mt: '0.25em', // ajuste si besoin pour aligner parfaitement
                        mr: 1,
                        color: 'secondary.main',
                        flexShrink: 0
                        }}
                    />

                    <Typography variant="body1" fontWeight="bold">
                        {rea.description}
                    </Typography>
                    </Box>
                        {rea.skills.length > 0 && (
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
                            {rea.skills.map((su) => (
                            <Chip
                                key={su.id}
                                label={`${su.skill.nom} (${su.duree})`}
                                size="small"
                                color="secondary"
                            />
                            ))}
                        </Box>
                        )}
                    </Box>
                    ))}
                    </ul>


                </AccordionDetails>
            </Accordion>
          </TimelineContent>
        </TimelineItem>

      ))}
      </Timeline>
    </Container>
  )
}



export default Cv;
