import React from 'react';
import 'materialize-css';

import AuthBox from '../../organisms/AuthBox/AuthBox';
import Header from '../../organisms/Header/Header';

const Login = () => {
    return (
        <div>
            <Header />
            <div className='container'>
                <AuthBox />
            </div>
        </div>
    );
};

export default Login;