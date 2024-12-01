import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Card, CardContent, Typography, IconButton, Box, Switch, Container } from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon, Favorite as FavoriteIcon } from '@mui/icons-material';

const App = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ minHeight: '100vh', py: 4 }}>
        <Card elevation={8} sx={{ position: 'relative', overflow: 'visible' }}>
          <Box
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="body2">
              {darkMode ? 'Dark' : 'Light'} Mode
            </Typography>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              color="primary"
            />
          </Box>
          
          <CardContent sx={{ textAlign: 'center', pt: 8 }}>
            <Typography variant="h3" gutterBottom>
              Welcome to My React App
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              A Material UI themed application
            </Typography>
            
            <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <FavoriteIcon
                  color={count > 0 ? 'error' : 'disabled'}
                  sx={{ fontSize: 40 }}
                />
                <Typography variant="h4">{count}</Typography>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  onClick={() => setCount(c => Math.max(0, c - 1))}
                  color="primary"
                  size="large"
                  sx={{ border: 1, borderColor: 'primary.main' }}
                >
                  <RemoveIcon />
                </IconButton>
                <IconButton
                  onClick={() => setCount(c => c + 1)}
                  color="primary"
                  size="large"
                  sx={{ border: 1, borderColor: 'primary.main' }}
                >
                  <AddIcon />
                </IconButton>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default App;