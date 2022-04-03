import React from 'react'

const AppContext = React.createContext(null)
export function useAppContext() {
    return React.useContext(AppContext)
}

function AppCnxtProvider({ children }) {
    const [theme, setTheme] = React.useState('light')

    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <AppContext.Provider value={{ theme, handleThemeChange }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppCnxtProvider