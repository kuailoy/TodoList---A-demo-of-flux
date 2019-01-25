import React from 'react';
import ThemedButton from "./ThemedButton";
import { themes, ThemeContext } from './theme-context';
import Layout from '../../Layout';

// An intermediate component that uses the ThemeButton
function ToolBar(props) {
  return <ThemedButton onClick={props.changeTheme}>
    Change Theme
  </ThemedButton>
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    }
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState(prevState => ({
      theme:
        prevState.theme === themes.light ?
        themes.dark :
        themes.light
    }));
  }

  render() {
    return (
      <Layout link={['nested', 'multiple']}>
        <ThemeContext.Provider value={this.state.theme}>
          <ToolBar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <div>
          <ThemedButton>default button</ThemedButton>
        </div>
      </Layout>
    );
  }
}

export default App;