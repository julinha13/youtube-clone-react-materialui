import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import HomePage from './Pages/Home/HomePage'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3ea6FF',
      },
      background: {
        default: darkMode ? '#232323' : '#FFF',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#FFF'
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <HomePage darkMode={darkMode} setDarkMode={setDarkMode}/>
    </ThemeProvider>
  );
}

export default App;
