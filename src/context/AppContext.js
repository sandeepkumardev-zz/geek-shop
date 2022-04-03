import React from 'react'

const AppContext = React.createContext(null)
export function useAppContext() {
    return React.useContext(AppContext)
}

function AppCnxtProvider({ children }) {
    const [theme, setTheme] = React.useState('light')
    const [products, setProducts] = React.useState([])

    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    React.useEffect(() => {
        fetch("./MOCK_DATA.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    return (
        <AppContext.Provider value={{ theme, handleThemeChange, products }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppCnxtProvider