import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'professional' | 'dark' | 'creative' | 'minimal';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: Array<{ name: Theme; label: string; description: string }>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themes = [
  { name: 'professional' as Theme, label: 'Professional', description: 'Clean and corporate' },
  { name: 'dark' as Theme, label: 'Dark', description: 'Elegant dark mode' },
  { name: 'creative' as Theme, label: 'Creative', description: 'Vibrant and artistic' },
  { name: 'minimal' as Theme, label: 'Minimal', description: 'Nature-inspired simplicity' },
];

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('professional');

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('professional', 'dark', 'creative', 'minimal');
    
    // Add current theme class
    if (theme === 'professional') {
      // Default theme, no class needed
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme,
    themes,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}