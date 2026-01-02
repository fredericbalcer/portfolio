import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cv from './pages/Cv'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import { Box } from '@mui/material'

function App() {
  return (
    <Router>
      <Navbar />
      <Box sx={{ mt: 8 }}>
        <Routes>
          <Route path="/" element={<Cv />} />
          <Route path="/cv" element={<Cv />} />          
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App
