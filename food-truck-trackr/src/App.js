import React from 'react';
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
      <OperatorLogin />
      <OperatorRegistration />
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return{
    state: state
  };
};


export default connect(mapStateToProps,{getSmurfs})(App);