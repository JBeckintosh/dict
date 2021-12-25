import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const pages = ['My Words', 'Product Info', 'Payments'];

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const ResponsiveAppBar = () => {
  const navigate = useNavigate();

  const handlePageChange = (page: string): void => {
    switch (page) {
      case '': navigate(''); break;
      case 'My Words': navigate('/my-words'); break;
      case 'Product Info': navigate('/product-info'); break;
      case 'Payments': navigate('/payments'); break;
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              onClick={() => handlePageChange('')}
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}                  
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default ResponsiveAppBar;

