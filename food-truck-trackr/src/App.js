import React, { useEffect } from 'react';
import './App.css';
import DinerLogin from './components/DinerLogin';
import DinerRegistration from './components/DinerRegistration';
import OperatorLogin from './components/OperatorLogin';
import OperatorRegistration from './components/OperatorRegistration';
import Navigation from "./components/Navigation";
import {connect} from 'react-redux'
import { Route } from 'react-router-dom';

import {getUsers, loginDiner, loginOperator} from './actions'

function App(props) {
  
  useEffect(() => {
    props.getUsers()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Truck Trackr</h1>
        <p>Connecting foodies to food trucks in seconds!</p>
      </header>
      <Navigation />
      { props.error !== '' ? <p>There was an error: {props.error.message}</p> : null }
      <Route  path="/register-diner" component={DinerRegistration} />
      <Route  path="/login-diner" render={() => <DinerLogin loginDiner={props.loginDiner} />} />
      <Route  path="/register-operator" component={OperatorRegistration} />
      <Route  path="/login-operator" render={() => <OperatorLogin loginOperator={props.loginOperator} />} />

    </div> 
  );
}

const mapStateToProps = state => {
  return {
    dinerData: state.diner.dinerData,
    operatorData: state.operator.operatorData,
    allOperators: state.operator.allOperators,
    isLoading: state.diner.isLoading,
    error: state.diner.error,
  };
};


export default connect(mapStateToProps,{loginDiner, loginOperator, getUsers})(App);