import { Box } from '@mui/material'
import React from 'react'
import { Navbar } from '../../components/Navbar'

export const HomeLayout = ({ children }) => {
  return (
    <Box sx={{display: 'flex '}}>
    
    {/* Navbar */}
    <Navbar/>

        <Box component='main'
        sx={{ flexGrow: 1, p: 3 }}
        >
            { children }

        </Box>
    </Box>
  )
}
