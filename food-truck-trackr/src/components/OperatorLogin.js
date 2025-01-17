import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import './form-styles.css';

const  OperatorLogin = (props) => {

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: yup.object({
            username: yup
                .string()
                .required('Please enter your username!')
                .label('Username'),
            password: yup
                .string()
                .required('Please enter your password!')
                .label('Password')
        }),
        onSubmit: (values) => {
           props.loginOperator(values)
        }
    })

    return(
        <div>
            <h2>Operator Login</h2>
            <p>Welcome back! Please login to continue.</p>
            <form onSubmit={formik.handleSubmit}>
                <label>Username:
                    <input 
                        type='username' 
                        name='username' 
                        value={formik.values.username} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </label>
                {
                formik.errors.username 
                    ? <span>{formik.errors.username}</span>
                    : null 
                }
                <label>Password:
                    <input 
                        name='password' 
                        type='password' 
                        value={formik.password} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                    />
                </label>
                {
                formik.errors.password 
                    ? <span>{formik.errors.password}</span>
                    : null 
                }
                <button 
                    type='submit'
                    disabled={
                        formik.isValid && formik.values !== formik.initialValues 
                            ? false 
                            : true
                    } 
                >
                    Login
                </button>
            </form>
        </div>
        )
}

export default OperatorLogin;