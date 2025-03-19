"use client"
import { createContext, useEffect, useState } from "react";
interface ThemeContextProps {
    isDark: boolean;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: any) => {
    const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => setIsDark(!isDark);
    useEffect(() => {
         if(isDark){
            document.documentElement.classList.add('dark')
         }else{
            document.documentElement.classList.remove('dark')
         }
    },[isDark])
    
    return <ThemeContext.Provider value={{isDark, toggleTheme}}>{children}</ThemeContext.Provider>;
};