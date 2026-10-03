import { createContext, useContext, useState } from 'react'
import { themes } from './theme'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState('avenox')
  const theme = themes[themeKey]

  const cssVars = {
    '--paper': theme.paper,
    '--paper-2': theme.paper2,
    '--ink': theme.ink,
    '--gold': theme.gold,
    '--signal': theme.signal,
    '--sand': theme.sand,
    '--muted': theme.muted,
  }

  return (
    <ThemeContext.Provider value={{ theme, themeKey, setThemeKey, cssVars }}>
      <div style={cssVars}>{children}</div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
