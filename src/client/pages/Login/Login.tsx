import React from 'react';
import { API_URL } from '../../const';
import Login from '../../components/templates/Login/Login';

const AUTH_URL: string = API_URL + "auth/";

const LoginPage = () => {
    return (
        <Login onClick={console.log}/>
    )
}

export default LoginPage;