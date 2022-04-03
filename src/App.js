import React from 'react';
import { ThemeProvider, LightTheme, DarkTheme } from 'geeky-ui/core/styles';
import './App.css';
import ProductPage from './pages/product-page';
import { useAppContext } from './context/AppContext';

function App() {
  const { theme } = useAppContext()

  return (
    <>
      <ThemeProvider theme={theme ? DarkTheme : LightTheme}>
        <ProductPage />
      </ThemeProvider>
    </>
  );
}

export default App;
