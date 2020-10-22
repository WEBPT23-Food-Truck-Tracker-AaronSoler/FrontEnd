import React from 'react';
import './App.css';
import DinerLogin from './components/DinerLogin';
import DinerRegistration from './components/DinerRegistration';
import OperatorLogin from './components/OperatorLogin';
import OperatorRegistration from './components/OperatorRegistration';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import DinerDashboard from './components/DinerDashboard';
import {connect} from 'react-redux'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Truck Trackr</h1>
        <p>Connecting foodies to food trucks in seconds!</p>
      </header>
      <Navigation />

          
        <Route  path="/register-diner" component={DinerRegistration} />
        <Route  path="/login-diner" component={DinerLogin} />
        <Route  path="/register-operator" component={OperatorRegistration} />
        <Route  path="/login-operator" component={OperatorLogin} />

    </div> 
  );
}

const mapStateToProps = state => {
  console.log(state);
  return{
    state: state
  };
};


export default connect(mapStateToProps,{ })(App);