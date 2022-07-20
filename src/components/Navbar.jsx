import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { MenuOutlined, LogoutOutlined } from '@mui/icons-material';
import React from 'react'

export const Navbar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar
    position='fixed'
    sx={{
        width: { sm: `calc(100% - ${drawerWidth }px)`},
        ml: { sm: `${ drawerWidth }px` }
    }}
    >


        <Toolbar>
            <IconButton 
            color='inherit'
            edge="start"
            sx={{mr: 2, display: {sm: 'none'}}}
            >
                <MenuOutlined/>
            </IconButton>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography>Home</Typography>
                <IconButton color='default'>
                    <LogoutOutlined/>
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
