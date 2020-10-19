import React from 'react';
import  * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import './form-styles.css';

const  OperatorRegistration = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            email: '',
            first_name: '',
            last_name: ''
        },
        validationSchema: yup.object({
            username: yup
                .string()
                .required()
                .min(6, 'Your username must be at least 6 characters!')
                .label('Username'),
            password: yup
                .string()
                .required()
                .min(6, 'Your password must be at least 8 characters!')
                .label('Password'),
            email: yup
                .string()
                .required()
                .email()
                .label('Email'),
            first_name: yup
                .string()
                .required()
                .min(2, 'This must be at least 2 characters.')
                .label('First name'),
            last_name: yup
                .string()
                .required()
                .min(2, 'This must be at least 2 characters.')
                .label('Last name'),
        }),
        onSubmit: values => {
            axios.post('https://build-week-food-truck.herokuapp.com/api/operator/register', values)
                .then(res => {
                    console.log('sg: operatorregistration.js: formik submit: AXIOS SUCESS: ', res);
                    //localStorage.setItem('token', res.data.token);
                })
                .catch(err => {
                    console.error('There was an error registering: ', err)
                })
        }
    })

    return(
        <div>
            <h2>Operator Registration</h2>
            <p>Thank you for your interest in joining Food Truck Trackr! Please enter the following information to register.</p>
            <form onSubmit = {formik.handleSubmit}>
                <label>Username:
                    <input 
                        name='username' 
                        type='text' 
                        value={formik.values.username} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                    />
                </label>
                {formik.errors.username
                    ? <span>{formik.errors.username}</span>
                    : null
                }
                <label>Password:
                    <input 
                        name='password' 
                        type='password' 
                        value={formik.values.password} 
                        onChange={formik.handleChange}                        
                        onBlur={formik.handleBlur} 
                    />
                </label>
                {formik.errors.password
                    ? <span>{formik.errors.password}</span>
                    : null
                }
                <label>Email:
                    <input 
                        name='email' 
                        type='email' 
                        value={formik.values.email} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                    />
                </label>
                {formik.errors.email
                    ? <span>{formik.errors.email}</span>
                    : null
                }
                <label>Firstname:
                    <input 
                        name='first_name' 
                        type='text' 
                        value={formik.values.first_name}
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                    />
                </label>
                {formik.errors.first_name
                    ? <span>{formik.errors.first_name}</span>
                    : null
                }
                <label>Lastname:
                    <input 
                        name='last_name'
                        type='text'
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                    />
                </label>
                {formik.errors.last_name
                    ? <span>{formik.errors.last_name}</span>
                    : null
                }
{/*             <label>I have read and agree to the Terms and Conditions: 
                    <input name='terms' type='checkbox' />
                </label> */}
                <button 
                    type='submit'
                    disabled= {
                        formik.isValid && formik.values !== formik.initialValues
                            ? false
                            : true
                    }
                >
                    Register
                </button>
            </form>
        </div>
        )
}

export default OperatorRegistration;