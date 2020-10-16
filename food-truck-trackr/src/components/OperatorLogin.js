import React from 'react';

const  OperatorLogin = () => {
    const [newOperator, setNewOperator] = useState({
        username: '',
        password: ''
    })
    return(
        <div>
            <h2>Operator Login</h2>
            <p>Welcome back!Please login to continue.</p>
            <form>
                <label>username:
                    <input type='username' name=''/>
                </label>
                <label>password:
                    <input name='' type='password' name=''/>
                </label>
                <label>re-enter password:
                    <input name='retype_password' type='password' name=''/>
                </label>
                
            </form>
        </div>
        )
}