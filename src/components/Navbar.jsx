import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { MenuOutlined, LogoutOutlined } from '@mui/icons-material';
import React from 'react'
import { logoutFirebase } from '../firestore/providers';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useState } from 'react';

export const Navbar = ({ drawerWidth = 240 }) => {
    
    const {status, errorMessage } = useSelector( state => state.auth);

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( logoutFirebase);
    }



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
                <IconButton color='default' onClick={onLogout}>
                    <LogoutOutlined/>
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
