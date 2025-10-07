'use client';
import { createContext, useContext, useState, ReactNode } from 'react';


interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};


interface ThemeProviderProps {
  children: ReactNode;
}


export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
