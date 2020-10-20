import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import Welcome from "./Welcome";

function Home() {
    return (
      <div className="Home">
    
        <Route exact path="/register" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Login} />
        <Route exact path="/" component={Welcome} />
      </div>
    )
}

export default Home;