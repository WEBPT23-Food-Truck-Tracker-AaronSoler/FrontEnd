import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";
import { dinerLocation } from './api/dinerLocation'

const PrettyLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px auto;
  border-radius: 20px;
  border: 1px solid black;
  width: 600px;
  background-color: lightgreen;
  p {
    margin: 10px auto;
  }
  h3 {
    margin: 20px auto;
  }
  label {
    margin: 10px 30px;
  }
  label input {
    margin-left: 10px;
  }
  div label input {
    margin-left: 0px;
  }
  label select {
    margin-left: 10px;
  }
  label textarea {
    margin-top: 10px;
  }
  button {
    padding: 10px;
    margin: 10px auto;
    background: white;
    font-size: 1.2rem;
    :hover {
      opacity: 0.7;
    }
  }
`;

const DinerLogin = () => {
  const defaultLogin = {
    /* id: "", */
    username: "",
    password: "",
    location: {},
  };

  const schema = yup.object().shape({
    username: yup.string().min(2).required("Enter your username."),
    password: yup
      .string()
      .min(8)
      .required("enter a password with 8 characters minimum length"),
  });

  const [login, setLogin] = useState(defaultLogin);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [errors, setErrors] = useState({
    ...defaultLogin,
    username: "",
    password: "",
    location: {},
  });

  useEffect(() => {
    schema.isValid(login).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [login]);

  const validate = (e) => {
    e.persist();
    yup
      .reach(schema, e.target.name)
      .validate(e.target.value)
      .then((valid) => setErrors({ ...errors, [e.target.name]: "" }))
      .catch((error) => {
        setErrors({ ...errors, [e.target.name]: error.errors[0] });
      });
  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setLogin({ ...login, [e.target.name]: value });
    validate(e);
  };

  const LogIn = async (e) => {
    e.preventDefault();
    const geodb_diner_location = await dinerLocation();
    axios
      .post("https://build-week-food-truck.herokuapp.com/api/diner/login", {...login, location:geodb_diner_location})
      .then((response) =>  {
        localStorage.setItem('token', response.data.token)
        console.log(response)
      })
      .catch((err) => console.log('There was an error logging in this diner: ', err));
  };

  return (
    <div>
      <PrettyLoginForm
      onSubmit={(e) => {
      LogIn(e);
      }}
      >
        <h3>Log In to Find an Awesome Food Truck!</h3>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            data-cy="username"
            value={login.username || ""}
            onChange={handleChange}
          />
        </label>
        <p style={{ color: "red", fontSize: ".8rem" }}>{errors.username}</p>

      
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            data-cy="password"
            value={login.password || ""}
            onChange={handleChange}
          />
        </label>
        <p style={{ color: "red", fontSize: ".8rem" }}>{errors.password}</p>
    
        <button
          type="submit"
          name="submit"
          className="Login__Button"
          disabled={buttonDisabled}
          data-cy="submit"
        >
        Log In!
        </button>
      </PrettyLoginForm>
      
      </div>
  );
}

export default DinerLogin;