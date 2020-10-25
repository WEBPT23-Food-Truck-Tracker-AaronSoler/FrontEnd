import React, { useEffect } from 'react';
import './App.css';
import {connect} from 'react-redux'
import { Route } from 'react-router-dom';

import Navigation from "./components/Navigation";
import PrivateRoute from './components/PrivateRoute';

import DinerLogin from './components/DinerLogin';
import DinerRegistration from './components/DinerRegistration';
import DinerDashboard from './components/DinerDashboard';

import OperatorLogin from './components/OperatorLogin';
import OperatorRegistration from './components/OperatorRegistration';
import OperatorDashboard from './components/OperatorDashboard';

import {loginOperator} from './actions'

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Truck Trackr</h1>
        <p>Connecting foodies to food trucks in seconds!</p>
      </header>
      <Navigation />
{/* DISPLAY ERROR IF PreSENT */}
      { props.error !== '' ? <p>There was an error: {props.error.message}</p> : null }

{/* DINER ROUTES */}
      <Route  path="/register-diner" component={DinerRegistration} />
      <Route  path="/login-diner" component={DinerLogin} />
      <PrivateRoute path="/dashboard-diner" component={DinerDashboard} />
{/* OPERATOR ROUTES */}
      <Route  path="/register-operator" component={OperatorRegistration} />
      <Route  path="/login-operator" render={() => <OperatorLogin loginOperator={props.loginOperator} />} />
      <PrivateRoute path="/dashboard-operator" component={OperatorDashboard} />

    </div> 
  );
}

const mapStateToProps = state => {
  return {
    operatorData: state.operator.operatorData,
    allOperators: state.operator.allOperators,
    isLoading: state.diner.isLoading,
    error: state.diner.error,
  };
};


export default connect(mapStateToProps,{loginOperator})(App);