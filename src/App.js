import React from 'react';
import { ThemeProvider, LightTheme, DarkTheme } from 'geeky-ui/core/styles';
import './App.css';
import ProductPage from './pages/product-page';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <>
      <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
        <ProductPage />
      </ThemeProvider>
    </>
  );
}

export default App;
