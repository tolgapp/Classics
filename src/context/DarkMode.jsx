import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext('dark');

const DarkMode = ({children}) => {


    const [dark, setDark] = useState(false);

    const toggleDark = () => {
      setDark(!dark);
    }


  return (
    <ThemeContext.Provider value={{dark, setDark, toggleDark}}>{children}</ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
    return useContext(ThemeContext);
}

export default DarkMode