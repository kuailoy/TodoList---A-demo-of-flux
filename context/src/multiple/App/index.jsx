import React, { Component, createContext } from 'react';

// Theme Context
const ThemeContext = createContext('light');
// Signed-in User Context
const UserContext = createContext({
  name: 'Tracy'
});

class App extends Component {
  render() {
    const { signedInUser, theme } = this.props;
    return (
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={signedInUser}>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

function Layout() {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  )
}

function Content() {
  <ThemeContext.Consumer>
    {theme => (
      <UserContext.Consumer>
        {user => (
          <ProfilePage user={user} theme={theme} />
        )}
      </UserContext.Consumer>
    )}
  </ThemeContext.Consumer>
}

export default App;