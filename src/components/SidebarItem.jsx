import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNote } from "../store/journalSlice/journalSlice";


export const SidebarItem = ({ note }) => {

    const dispatch = useDispatch();

    const click= () => {
        console.log("pasó por aqui" + note.id);
        dispatch( setActiveNote(note) );
    };    

   const newTitle = useMemo(() => {
        return note.title.length > 17 ? note.title.substring(0,17) + '...' : note.title;
    }, [note.title]);

  return (
    <ListItem key={ note.id } disablePadding>
        <ListItemButton onClick={click}>
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={ newTitle } />
                <ListItemText secondary={ 'Exercitation cillum irure elit consectetur.' } />
            </Grid>
        </ListItemButton>
    </ListItem>
    )
}
