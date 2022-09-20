import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/journalSlice/thunks';
import { NothingSelectedView } from './NothingSelectedView';

export const NoteView = () => {

    const dispatch = useDispatch();

    const { isSaving, activeNote } = useSelector( state => state.journal);

    const onClickNewNote = () => {
        dispatch( startNewNote());
        
        console.log("isSaving: -> ");
        console.log(isSaving);
    }

  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >28 de agosto, 2023</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un título"
                label="Título"
                sx={{ border: 'none', mb: 1 }}
            />

            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió en el día de hoy?"
                minRows={ 5 }
            />
        </Grid>

        {
            (!!activeNote) ? <h2>hola</h2> : <NothingSelectedView/> 
        }
        

        <button onClick={onClickNewNote}> guardar </button>

    </Grid>
  )
}