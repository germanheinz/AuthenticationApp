import { purpleTheme } from './purpleTheme'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
     <CssBaseline />
        { children }
    </ThemeProvider>

    )
  
}
