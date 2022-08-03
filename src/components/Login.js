import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate()  
  const [loginError, setLoginError] = useState("")
  const [login, setLogin] = useState(false)
  const [sessionToken, setSessionToken] = useState(false)
  

  useEffect(()=>{
    login && navigate('/dashboard', {state:{sessionToken }})
    console.log('navigate', login)
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login])
  const handleSubmit = (event) => {
    
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginData = ({
      username: data.get('email'),
      password: data.get('password'),
    });

    axios
    .post("https://fe-screening.onrender.com/login", loginData)
    .then(res => {
      console.log(res)
      sessionStorage.setItem('sessionToken', res.data.session)
      console.log(sessionStorage.getItem('sessionToken'))
    })
    .then(res2 =>{
      console.log('res2', res2)
      setSessionToken(sessionStorage.getItem('sessionToken'))
      setLogin(true)
    })
    .catch(error => {
      console.log(error)
      setLoginError('Login error, please try again.')
      
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          {loginError !== "" &&
            <Box>
              <Typography variant="h6" gutterBottom>
                {loginError}
              </Typography>
            </Box>
          }
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
