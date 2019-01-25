import React from 'react';
import { themes, ThemeContext } from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';
import Layout from '../../Layout';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(prevState => ({
        theme:
          prevState.theme === themes.dark
          ? themes.light
          : themes.dark
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }
  render() {
    return (
      <Layout link={['index', 'multiple']}>
        <ThemeContext.Provider value={this.state}>
          <Content />
        </ThemeContext.Provider>
      </Layout>
    );
  }
}

function Content() {
  return <div>
    <ThemeTogglerButton />
  </div>;
}

export default App;