import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/Button';

import styles from "./index.scss";

const App = () => {
    return (
        <div>
            <h1 className={styles.title}>Hello Webpack!</h1>
            <Example />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));