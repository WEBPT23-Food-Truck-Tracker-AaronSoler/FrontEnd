// // libraries
// import React from "react";
// import { connect } from "react-redux";
// import { login } from "./../../store/authentication/";
// import { withFormik, Form, Field } from "formik";
// import axiosWithAuth from "./../../utils/AxiosWithAuth";
// import * as yup from "yup";
// import { Link } from "react-router-dom";

// const LoginForm = ({ errors, touched, ...props }) => {
//   return (
//     <div className="login-form">
//       <Form className="form">
//         <Field
//           className="field"
//           type="text"
//           name="username"
//           placeholder="username"
//         />
//         {touched.username && errors.username && (
//           <p className="errors">{errors.username}</p>
//         )}

//         <Field
//           className="field"
//           type="password"
//           name="password"
//           placeholder="password"
//         />
//         {touched.password && errors.password && (
//           <p className="errors">{errors.password}</p>
//         )}

//         <button type="submit">Login</button>
//         {/* if userName is not registered
//       return ALERT - user not found, please register to Login
//       and return user to registration page on alert message accept */}

//         <Link className="clickToRegister" to="/Registration">
//           Click here to register as a new user.
//         </Link>
//       </Form>
//     </div>
//   );
// };

// const FormikLogin = withFormik({
//   mapPropsToValues({ username, password, ...props }) {
//     return {
//       username: username || "",
//       password: password || ""
//     };
//   },

//   validationSchema: yup.object().shape({
//     username: yup
//       .string()
//       //.label('username')
//       .required("Username is required!"),
//     password: yup
//       .string()
//       //.label('password')
//       .required("Password is required!")
//   }),

//   handleSubmit(values, { props }) {
//     axiosWithAuth()
//       .post("https://food-truck-trakr.herokuapp.com/api/login", values)
//       .then(response => {
//         localStorage.setItem("token", response.data.token);
//         console.log(response.data.role);
//         props.login(response.data.role);
//         if (response.data.role === "diner") {
//           props.history.push("/dinerdash");
//         } else if (response.data.role === "operator") {
//           props.history.push("/operatordash");
//         }
//       })
//       .catch(err => console.log(err.response));
//   }
// })(LoginForm);

// const mapStateToProps = state => {
//   return {
//     isAuthenticated: state.auth.isAuthenticated
//   };
// };

// export default connect(mapStateToProps, { login })(FormikLogin);


import React, { useState, useEffect } from "react";
import axios from "axios";
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



const Login = () => {
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
      <PrettyLoginForm
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
      </PrettyLoginForm>
      
      </div>
  );
};

export default Login;