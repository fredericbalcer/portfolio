import { Box, Typography, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

const SkillsBanner = () => {
  const [open, setOpen] = useState(true)

  if (!open) return null // cache le bandeau si fermé

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'warning.main',
        color: 'white',
        py: 1.5,
        px: 2,
        textAlign: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: 'bold', flex: 1 }}>
        🚧 Contenu en construction 🚧
      </Typography>
      <IconButton
        size="small"
        sx={{ color: 'white' }}
        onClick={() => setOpen(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  )
}

export default SkillsBanner
