import React from 'react';
import "materialize-css";

import styles from "./App.scss";
import Header from "../../components/organisms/Header/Header";
import Login from '../../components/templates/Login/Login';

const App = () => {
    return (
        <div className={styles.main}>
            <Header />
            <Login />
        </div>
    );
}

export default App;