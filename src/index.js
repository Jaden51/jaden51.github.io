import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Quotes from './components/Quotes';
import App from './App';
import NavBar from './components/NavBar';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <NavBar><App /></NavBar>} />
            <Route path='/jokes' render={() => <NavBar><Quotes /></NavBar>} />
        </Switch>
    </Router>, 
    document.getElementById('root'));