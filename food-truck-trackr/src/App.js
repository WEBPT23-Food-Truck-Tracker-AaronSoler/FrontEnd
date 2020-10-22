import React from 'react';
import logo from './logo.svg';
import './App.css';
import DinerLogin from './components/DinerLogin';
import DinerRegistration from './components/DinerRegistration';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import DinerDashboard from './components/DinerDashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Truck Trackr</h1>
        <p>Connecting foodies to food trucks in seconds!</p>
      </header>
      <Navigation />
      <DinerLogin />
      <DinerRegistration />  
    </div>
  );
}

export default App;