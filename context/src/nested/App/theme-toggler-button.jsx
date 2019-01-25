import React from 'react';
import { ThemeContext } from './theme-context'

class ThemeTogglerButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <button
            onClick={toggleTheme}
            style={{ backgroundColor: theme.background }}
          >
            Toggle Theme
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemeTogglerButton;