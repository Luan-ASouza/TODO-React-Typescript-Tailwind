import { createContext, useState, useEffect } from "react";

type ThemeName = 'light' | 'dark';

interface ThemeProviderProps {
    children: React.ReactNode
}

interface ThemeContextType {
    theme: ThemeName;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'dark',
    toggleTheme: () => {}
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const [theme, setTheme] = useState<ThemeName>(() => {
        const saved = localStorage.getItem('theme');
        return (saved as ThemeName) || 'dark';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};