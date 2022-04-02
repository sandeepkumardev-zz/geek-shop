import React from 'react';
import { ThemeProvider, LightTheme, DarkTheme } from 'geeky-ui/core/styles';
import './App.css';
import AppBar from './components/Appbar';
import ProductPage from './components/Product-Page';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <>
      <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
        <AppBar />
        <ProductPage />
      </ThemeProvider>
    </>
  );
}

export default App;
