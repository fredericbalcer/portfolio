import { createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#BB86FC',
    },
    secondary: {
      main: '#9C27B0',
    },
    background: {
      default: '#121212',
      paper: '#1E1E2E',
    },
    text: {
      primary: '#EDE7F6',
      secondary: '#B39DDB',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
})

export default darkTheme
