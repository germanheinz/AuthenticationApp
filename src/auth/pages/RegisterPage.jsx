import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import { AccountCircle, Google } from '@mui/icons-material';
import { Button, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import KeyIcon from '@mui/icons-material/Key';



export const RegisterPage = () => {
  return (
    <>
        <AuthLayout>
     
     <Card sx={{ minWidth: 100, maxWidth: 450 }}>
     <form>
       <CardContent>
       <Grid container>
             <Grid item xs={ 12 } sx={{ mt: 2 }}>
               <Typography variant="h5" component="div" align='center' color="primary">
                 Sign up
               </Typography>
             </Grid>
             <Grid item xs={ 12 } sx={{ mt: 2 }}>
             <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                 <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                 <TextField id="input-with-sx" label="Email" type="email" placeholder='Email' variant="standard" fullWidth />
               </Box>
             </Grid>
             <Grid item xs={ 12 } sx={{ mt: 2 }}>
               <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                 <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                 <TextField id="input-with-sx" label="Password" type="password" placeholder='Password' variant="standard" fullWidth />
               </Box>
             </Grid>
             <Grid item xs={ 12 } sx={{ mt: 2 }}>
               <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                 <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                 <TextField id="input-with-sx" label="Password" type="password" placeholder='Password' variant="standard" fullWidth />
               </Box>
             </Grid>
               
             <Grid container spacing={ 5 } sx={{ mb: 2, mt: 1 }}>
               <Grid item xs={ 12 } sm={ 6 }>
                 <Button variant='contained' fullWidth>
                   Sign in
                 </Button>
               </Grid>
               <Grid item xs={ 12 } sm={ 6 }>
                 <Button variant="contained" fullWidth>
                   <Google />
                   <Typography sx={{ ml: 1 }}></Typography>
                 </Button>
               </Grid>
             </Grid>
             <Grid item xs={ 12 } sm={ 6 } >
              <NavLink to="/auth/login">
                Sign in
              </NavLink>
            </Grid>
           </Grid>
           </CardContent>
       </form>
     </Card>
     </AuthLayout>
    </>
  )
}
