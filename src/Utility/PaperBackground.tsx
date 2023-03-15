import { Button, ButtonGroup, Container, Paper, ThemeProvider } from '@mui/material'
import React from 'react'
import MenuBtn from '../Components/MenuBtn'
import { MenuIteams } from '../Static.types'
import theme from '../Styles/CustomeThemes'

import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import { green, red, blue } from '@mui/material/colors'
import { Padding } from '@mui/icons-material'
import SelectCard from './SelectCard'

function PaperBackground() {

  const paperStyle = {
    marginTop: "2rem",
    padding: "1rem",
  }

  const constainerStyles = {
    maxWidth: "250px",
  }

   const buttonStyles ={
    fontSize: 18, 
    // fontWeight: 'medium',            
    // display: 'inline',
    fontWeight: 'bold',
   }

   const iconStyles = {
    
    color: green[500],
    // display: 'inline',
  }

  const buttonGroupStyle = {
    borderRadius: 2,
    boxShadow: 1,
    p: 2,
  }
  return (
    <ThemeProvider theme={theme}>
    <Container sx={constainerStyles}>
        <Paper sx={{paperStyle, colors: 'secondary'}}>

        </Paper>

  
        
    </Container>
    </ThemeProvider>

  )
}

export default PaperBackground