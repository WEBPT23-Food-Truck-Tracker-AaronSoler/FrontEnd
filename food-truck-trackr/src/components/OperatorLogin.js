import React, {useState} from 'react';

const  OperatorLogin = () => {
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const handleChanges = (e) => {
        setLogin({
            ...login,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
            e.preventDefault();
            console.log(login)
    }

    return(
        <div>
            <h2>Operator Login</h2>
            <p>Welcome back! Please login to continue.</p>
            <form>
                <label>username:
                    <input type='username' name='username' value={login.username} onChange={handleChanges}/>
                </label>
                <label>password:
                    <input name='password' type='password' value={login.password} onChange={handleChanges}/>
                </label>
                <button>Login</button>
{/*             <label>re-enter password:
                    <input name='retype_password' type='password' name=''/>
                </label> */}
                
            </form>
        </div>
        )
}

export default OperatorLogin;