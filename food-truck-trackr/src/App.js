import React from "react";
import { Route } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" component={Login} />
      <Route path="/Registration" component={Registration} />
    </div>
  );
}

export default App;