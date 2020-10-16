import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HomeDiv = styled.div`
  background-image: url("src/images/lightBlueFoodTruck.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

const ImageBackground = styled.div`
    vertical-align: top;
    display: block;
    width: 100vw;
`

const Title = styled.h3`
  color: white;
  text-shadow: 1px 1px black;
  font-size: 2rem;
  margin: auto auto;
  padding-top: 100px;
`;

const LoginButton = styled.button`
  padding: 10px;
  background-color: green;
  color: white;
  font-size: 1.5rem;
  margin-top: 20px;
  border-radius: 20px;
  :hover {
    background-color: white;
    color: green;
  }
`;

const SignUpButton = styled.button`
  padding: 10px;
  background-color: green;
  color: white;
  font-size: 1.5rem;
  margin-top: 20px;
  border-radius: 20px;
  :hover {
    background-color: white;
    color: green;
  }
`;

const Welcome = () => {
  return (
    <HomeDiv>
      <Title>Find Your Favorite Food Truck!</Title>
      <NavLink to="/login">
        <LoginButton data-cy="loginButton">Log In</LoginButton>
        <SignUpButton data-cy="SignUpButton">New Diner? Sign Up!</SignUpButton>
      </NavLink>
    </HomeDiv>
  );
};

export default Welcome;
