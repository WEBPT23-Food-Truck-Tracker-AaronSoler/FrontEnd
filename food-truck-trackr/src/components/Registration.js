import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";

const PrettyRegForm = styled.form`
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



const Registration = () => {
  const defaultRegistration = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  };

  const schema = yup.object().shape({
    username: yup.string().min(2).required("enter your username"),
    tel: yup
      .string()
      .min(8)
      .required("enter a password with 8 characters minimum length"),
  });

  const [registration, setRegistration] = useState(defaultRegistration);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [errors, setErrors] = useState({
    ...defaultRegistration,
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  
  });

  useEffect(() => {
    schema.isValid(registration).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [registration]);

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
    setRegistration({ ...registration, [e.target.name]: value });
    validate(e);
  };

  const addRegistration = (e) => {
    e.preventDefault();
    setRegistration(defaultRegistration);
    axios
      .post("https://reqres.in/api/users", registration)
      .then((response) => {
        //not sure what goes here
      })
      .catch((err) => console.log(err));
  };

  
  return (
    <div>
      <PrettyRegForm
        onSubmit={(e) => {
        addRegistration(e);
        }}
      >
        <h3>Register To Find An awesome Food Truck</h3>
        <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter Your First Name"
            data-cy="firstName"
            value={registration.firstName || ""}
            onChange={handleChange}
          />
        </label>
        <p style={{ color: "red", fontSize: ".8rem" }}>{errors.firstName}</p>

        <label htmlFor="lastName">
          Last Name:
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter Your Last Name"
            data-cy="lastName"
            value={registration.lastName || ""}
            onChange={handleChange}
          />
        </label>
        <p style={{ color: "red", fontSize: ".8rem" }}>{errors.lastName}</p>


        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            data-cy="email"
            value={registration.email || ""}
            onChange={handleChange}
          />
        </label>
        <p style={{ color: "red", fontSize: ".8rem" }}>{errors.email}</p>


        <label htmlFor="username">
          Name:
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            data-cy="username"
            value={registration.username || ""}
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
            placeholder="Set a password with 8 characters or more"
            data-cy="password"
            value={registration.password || ""}
            onChange={handleChange}
          />
        </label>
        <p style={{ color: "red", fontSize: ".8rem" }}>{errors.password}</p>

        
        <label htmlFor="termsAndConditions">
            <input
              type="checkbox"
              name="termsAndConditions"
              checked={registration.termsAndConditions}
              value={registration.termsAndConditions}
              data-cy="termsAndConditions"
              onChange={handleChange}
            />
            I have read the Terms and Conditions
        </label>
          <p style={{ color: "red", fontSize: ".8rem" }}>
            {errors.termsAndConditions}
          </p>
          
        <button
          type="submit"
          name="submit"
          className="Order__Button"
          disabled={buttonDisabled}
          data-cy="submit"
        >
         Sign Up!
        </button>
      </PrettyRegForm>
      
        );
      })}
    </div>
  );
};

export default Registration;