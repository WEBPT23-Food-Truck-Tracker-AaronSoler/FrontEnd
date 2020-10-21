import React from 'react';
import './App.css';
import OperatorLogin from './components/OperatorLogin';
import OperatorRegistration from './components/OperatorRegistration';
import Navigation from "./components/Navigation";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <OperatorLogin />
      <OperatorRegistration />
      <Navigation />
      <Home />
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