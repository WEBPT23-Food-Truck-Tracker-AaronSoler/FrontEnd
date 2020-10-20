import React from 'react';
import logo from './logo.svg';
import './App.css';
import OperatorLogin from './components/OperatorLogin';
import OperatorRegistration from './components/OperatorRegistration';
import Navigation from "./components/Navigation";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <OperatorLogin />
      <OperatorRegistration />
      <Navigation />
      <Home />
    </div>
  );
}

export default App;