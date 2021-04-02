import React from 'react';

import AuthBox from '../../organisms/AuthBox/AuthBox';

import styles from "./Login.scss";

const Login = () => {
    return (
        <div className={styles.centered}>
            <AuthBox />
        </div>
    );
};

export default Login;