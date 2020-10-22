import React from 'react';
import './App.css';
import DinerLogin from './components/DinerLogin';
import DinerRegistration from './components/DinerRegistration';
import OperatorLogin from './components/OperatorLogin';
import OperatorRegistration from './components/OperatorRegistration';
import Navigation from "./components/Navigation";
import {connect} from 'react-redux'
import { Route } from 'react-router-dom';

import {loginDiner} from './actions'
import { ErrorMessage } from 'formik';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Truck Trackr</h1>
        <p>Connecting foodies to food trucks in seconds!</p>
      </header>
      <Navigation />

          
        <Route  path="/register-diner" component={DinerRegistration} />
        <Route  path="/login-diner" render={() => <DinerLogin loginDiner={props.loginDiner} />} />
        <Route  path="/register-operator" component={OperatorRegistration} />
        <Route  path="/login-operator" component={OperatorLogin} />
      
        <Route path='/error' render={() => <ErrorMessage error={props.error}/>} />

    </div> 
  );
}


const ErrorMessage = (props) => {
  return(
    <div>
      <p>There was an error: {props.error.message}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    dinerData: state.dinerData,
    isLoading: state.isLoading,
    error: state.error,
  };
};


export default connect(mapStateToProps,{loginDiner})(App);