import React from 'react'

const AppContext = React.createContext(null)
export function useAppContext() {
    return React.useContext(AppContext)
}

function AppCnxtProvider({ children }) {
    const [theme, setTheme] = React.useState(false)

    const handleThemeChange = () => {
        setTheme(!theme);
    };

    return (
        <AppContext.Provider value={{ theme, handleThemeChange }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppCnxtProvider