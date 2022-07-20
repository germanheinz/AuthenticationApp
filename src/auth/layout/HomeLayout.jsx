import { Box } from '@mui/material'
import React from 'react'
import { Navbar } from '../../components/Navbar'
import { SideBar } from '../../components/Sidebar'

export const HomeLayout = ({ children }) => {
  return (
    <Box sx={{display: 'flex '}}>
    
    {/* Navbar */}
    <Navbar/>

    <SideBar/>

        <Box component='main'
        sx={{ flexGrow: 1, p: 3, marginTop: 6 }}
        >
            { children }

        </Box>
    </Box>
  )
}
