import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppCnxtProvider from './context/AppContext';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AppCnxtProvider>
            <App />
        </AppCnxtProvider>
    </React.StrictMode>);