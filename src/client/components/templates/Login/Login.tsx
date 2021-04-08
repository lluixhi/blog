import React from 'react';
import AuthBox from '../../organisms/AuthBox/AuthBox';
import Header from '../../organisms/Header/Header';

const Login = (props: { onClick: VoidFunction }) => {
    return (
        <div>
            <Header />
            <div className='container'>
                <AuthBox onClick={props.onClick}/>
            </div>
        </div>
    );
};

export default Login;