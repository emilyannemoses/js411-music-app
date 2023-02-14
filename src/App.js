import React, { useState, createContext } from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn';

export const LoginContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
});

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">
      <ButtonAppBar />
      <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
        {loggedIn ? (
          <LogIn />
        ) : (
          <Dashboard />
        )}
      </LoginContext.Provider>
    </div>
  );
}

export default App;