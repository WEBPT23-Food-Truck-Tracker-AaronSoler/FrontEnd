import React, {useState} from 'react';

const  OperatorRegistration = () => {
    const [newOperator, setNewOperator] = useState({
        id: '',
        username: '',
        password: '',
        email: '',
        first_name: '',
        last_name: ''
    })

    const handleChanges = (e) => {
        setNewOperator({
            ...newOperator,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
            e.preventDefault();
            console.log(newOperator)
    }

    return(
        <div>
            <h2>Operator Registration</h2>
            <p>Thank you for your interest in joining Food Truck Trackr! Please enter the following information to register.</p>
            <form>
                <label>username:
                    <input name='username' type='text' value={newOperator.username} onChange={handleChanges}/>
                </label>
                <label>password:
                    <input name='password' type='password' value={newOperator.password} onChange={handleChanges}/>
                </label>
                <label>email:
                    <input name='email' type='email' value={newOperator.email} onChange={handleChanges}/>
                </label>
                <label>first name:
                    <input name='first_name' type='text' value={newOperator.first_name} onChange={handleChanges}/>
                </label>
                <label>last name:
                    <input name='last_name' type='text' value={newOperator.last_name} onChange={handleChanges}/>
                </label>
{/*             <label>I have read and agree to the Terms and Conditions: 
                    <input name='terms' type='checkbox' />
                </label> */}
                <button>Register</button>
            </form>
        </div>
        )
}

export default OperatorRegistration;