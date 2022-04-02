import React from 'react';
import { ThemeProvider, LightTheme, DarkTheme } from 'geeky-ui/core/styles';
import './App.css';
import AppBar from './components/Appbar';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <>
      <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
        <AppBar />
      </ThemeProvider>
    </>
  );
}

export default App;
