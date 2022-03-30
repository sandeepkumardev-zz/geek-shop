import React from 'react';
import { ThemeProvider, LightTheme, DarkTheme } from 'geeky-ui/core/styles';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <>
      <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
        Geek Shop
      </ThemeProvider>
    </>
  );
}

export default App;
