import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { SidebarItem } from './SidebarItem';
import { map } from '@firebase/util';


export const SideBar = ({ drawerWidth = 240 }) => {


    const { name } = useSelector( state => state.auth);
    const { notes } = useSelector( state => state.journal);

    useEffect(() => {
        console.log("cambió");
 
    }, [notes])
    



  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant='permanent' // temporary
            open
            sx={{ 
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    {name}
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    notes.map( note => (
                      <SidebarItem key={ note.id } note={ note } />
                    ))  
                }
            </List>

        </Drawer>

    </Box>
  )
}