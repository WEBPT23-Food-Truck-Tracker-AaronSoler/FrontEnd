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



const DinerRegistration = () => {
  const defaultRegistration = {
   /*  id: "", */
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
   /* termsAndConditions: false, */
  };

  const schema = yup.object().shape({
    first_name: yup.string().min(2).required("Enter your first name."),
    last_name: yup.string().min(2).required("Enter your last name."),
    email: yup.string().email().required("Enter your email address."),
    username: yup.string().min(6).required("Create a username with at least 6 characters."),
    password: yup
      .string()
      .min(8)
      .required("enter a password with 8 characters minimum length"),
    /* termsAndConditions: yup.boolean().oneOf([true]), */
  });

  const [registration, setRegistration] = useState(defaultRegistration);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [errors, setErrors] = useState({
    ...defaultRegistration,
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    /* termsAndConditions: false, */
  
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
      .validate(e.target.type === "checkbox" ? e.target.checked : e.target.value)
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
    axios
      .post("https://build-week-food-truck.herokuapp.com/api/diner/register", registration)
      .then((response) => {
        console.log(response)
        setRegistration(defaultRegistration); 
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
        <label htmlFor="first_name">
          First Name:
          <input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Enter Your First Name"
            data-cy="first_name"
            value={registration.first_name || ""}
            onChange={handleChange}
          />
        </label>
        <p style={{ color: "red", fontSize: ".8rem" }}>{errors.first_name}</p>

        <label htmlFor="last_name">
          Last Name:
          <input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Enter Your Last Name"
            data-cy="last_name"
            value={registration.last_name || ""}
            onChange={handleChange}
          />
        </label>
        <p style={{ color: "red", fontSize: ".8rem" }}>{errors.last_name}</p>


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
          Username:
          <input
            type="text"
            id="username"
            name="username"
            placeholder="create a username"
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

{/*         
        <label htmlFor="termsAndConditions" className="termsAndConditions">
            <input
              type="checkbox"
              id="termsAndConditions"
              name="termsAndConditions"
              checked={registration.termsAndConditions}
              data-cy="termsAndConditions"
              onChange={handleChange}
            />
            I have read the Terms and Conditions
        </label>
          <p style={{ color: "red", fontSize: ".8rem" }}>
            {errors.termsAndConditions}
          </p> */}
    
          
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
      
        
    
    </div>
  );
};

export default DinerRegistration;