import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { AccountCircle, Google } from '@mui/icons-material';
import { Alert, Button, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

import { useMemo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import KeyIcon from '@mui/icons-material/Key';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, checkingGoogleAuthentication, startLoginWithGoogle } from '../../store/auth/thunks';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const formValitations = {
  email:[ (value) => value.includes('@'), 'Error: email is required'],
  password:[ (value) => value.length >= 4, 'Error: password is required' ] 
}

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth );
  
  // console.log(status);

  const dispatch = useDispatch();

  const isAuthenticating = useMemo( () => status === 'Verifying...', [status]);
  // console.log("auth: " + isAuthenticating);

  const { email, password, onInputChange } = useForm(formData);
  
  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log({email, password});
    dispatch( startLoginWithGoogle({email, password}) );
  }

  const onGoogleSignIn = () => {
    console.log("Click Google");
    dispatch( checkingGoogleAuthentication("test" , "test") )
  }

  return (
    <AuthLayout>
     
    <Card sx={{ minWidth: 100, maxWidth: 450 }}>
    <form onSubmit={ onSubmit }>
      <CardContent>
      <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <Typography variant="h5" component="div" align='center' color="primary">
                Sign in
              </Typography>
            </Grid>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField 
                    name="email"
                    value={ email }
                    onChange= { onInputChange }
                    id="input-with-sx" 
                    label="Email" 
                    type="email" 
                    placeholder='Email' 
                    variant="standard" 
                    fullWidth 
                  />
              </Box>
            </Grid>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField 
                    name="password" 
                    value={ password } 
                    onChange= { onInputChange } 
                    id="input-with-sx" 
                    label="Password" 
                    type="password" 
                    placeholder='Password' 
                    variant="standard" 
                    fullWidth 
                  />
              </Box>
            </Grid>
            <Grid 
                  item 
                  xs={ 12 } 
                  sm={ 12 }
                  display={ !!errorMessage ? '' : 'none' }

                  >
                <Alert severity='error' >{ errorMessage }</Alert>
               </Grid>
              
            <Grid container spacing={ 3 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button onClick={ onSubmit } variant='contained' fullWidth>
                  Sign up
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button onClick={ onGoogleSignIn } variant="contained" fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}></Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 } >
              <NavLink to="/auth/register">
                Sign up
              </NavLink>
            </Grid>
          </Grid>
          </CardContent>
      </form>
    </Card>
    </AuthLayout>
  )            
}