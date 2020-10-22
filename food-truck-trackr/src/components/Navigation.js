import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationDiv = styled.div`
  width: 100%;
  background: orange;
  display: flex;
  justify-content: flex-end;
  height: 4rem;
  align-items: center;
  border-bottom: 4px solid black;
  border-top: 4px solid black;
  a {
    text-decoration: none;
    margin-right: 3%;
    color: black;
    font-size: 1.4rem;
  }
`;

const Navigation = () => {
  return (
    
    <NavigationDiv>
      <Link to="/login-diner">LOGIN DINER</Link>
      <Link to="/login-operator">LOGIN OPERATOR</Link>
      <Link to="/register-diner">REGISTER DINER</Link>
      <Link to="/register-operator">REGISTER OPERATOR</Link>
      
      <Link to="/marketing">About</Link>
      <Link to="/">Home</Link>
    </NavigationDiv>
  );
};

export default Navigation;