import React from 'react';

// preset themes
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  }
};

// create a context object with default value themes.dark
export const ThemeContext = React.createContext(themes.dark);