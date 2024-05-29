import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button,Container, Typography } from '@mui/material'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Container sx={{border:5,boxShadow:5, pb:2}}> 
    <h1>prueba</h1>
    <h6>segunda prueba</h6>
    <Button>Botón de prueba</Button>
     <Typography> 
      prueba
      </Typography>
    <p> dasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
    </Container>

  )
}

export default App
