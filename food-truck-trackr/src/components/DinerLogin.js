import React, { useState, useEffect } from "react";
import * as yup from "yup";
import styled from "styled-components";

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

const DinerLogin = (props) => {
  const defaultLogin = {
    /* id: "", */
    username: "",
    password: "",
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

  const LogIn = (e) => {
    e.preventDefault();
    props.loginDiner(login);
    console.log(login)
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