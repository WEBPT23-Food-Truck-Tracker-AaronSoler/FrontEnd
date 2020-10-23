import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationDiv = styled.div`
  width: 100%;
  background: #173F4E;
  display: flex;
  justify-content: flex-end;
  height: 4rem;
  align-items: center;
  border-bottom: 4px solid black;
  border-top: 4px solid black;
  a {
    text-decoration: none;
    margin-right: 3%;
    color: #DDAA00;
    font-size: 1.4rem;
  }
`;

const Navigation = () => {
  return (
    
    <NavigationDiv>
      <Link to="/register">SIGN UP</Link>
      <Link to="/login">Log In!</Link>
      <Link to="/registerOperator">Sign Up as Food Truck Operator</Link>
      <Link to="/loginOperator">Sign In as Food Truck Operator</Link>
      <Link to="/marketing">About</Link>
      <Link to="/">Home</Link>
    </NavigationDiv>
  );
};

export default Navigation;