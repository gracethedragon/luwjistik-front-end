import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';

const theme = createTheme();
export default function NotFound(){
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
         <Typography component="h1" variant="h1">
          404
        </Typography>
        <Typography component="h1" variant="h5">
          The page you are looking for cannot be found. Please check your url.
        </Typography>
      </Box>
    </Container>
  </ThemeProvider>
  )
}