import { SocialDistanceTwoTone } from '@mui/icons-material'
import { Container, Typography, TextField, Button, Box, Alert, Card, CardContent } from '@mui/material'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    try {
      //const response = await fetch('http://192.168.1.24:8088/api/contact', {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Erreur serveur')
      }

      // Tout s'est bien passé
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setError('Impossible d’envoyer le message. Veuillez réessayer plus tard.')
    }
  }

  return (
    <Container sx={{ mt: -6, mb: 4 }}>

      <Card sx={{ mb: 4, boxShadow: 3, borderRadius: 2}}>
        <CardContent>
            <Typography variant="h6" gutterBottom>Mes coordonnées</Typography>
            <Typography>Frédéric BALCER</Typography>
            <Typography>Adresse : Rue des Laids Bideaux, 21 B-6880 ROSSART</Typography>
            <Typography>Email : frederic.balcer@skynet.be</Typography>
            <Typography>Tél : (+32) 61 27 06 15    Gsm : (+32) 474 93 07 55</Typography>
        </CardContent>
       </Card>

      {submitted && <Alert severity="success" sx={{ mb: 2 }}>Merci ! Votre message a été envoyé.</Alert>}

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%' // occupe toute la largeur du Container
        }}
      >
        <TextField
          label="Nom"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />

        <Button type="submit" variant="contained">
          Envoyer
        </Button>
      </Box>
    </Container>
  )
}

export default Contact
