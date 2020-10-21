import React from 'react';

const userIsAuthenticated = () => {
    if (localStorage.getItem('token') !== null) {
       return true; 
    } else return false; 
}

const PrivateRoute = () => {
    return (
        <div>
            PrivateRoute!
        </div>
    )
}