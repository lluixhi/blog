import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from "./components/templates/Main/Main";
import LoginPage from './pages/Login/Login';

ReactDOM.render((
    <Router>
        <Switch>
            <Route path='/login' component={LoginPage} />
            <Route path='/' component={Main} /> 
        </Switch>
    </Router>
), document.getElementById('root'));