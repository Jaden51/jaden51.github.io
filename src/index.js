import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Quotes from './components/Quotes';
import App from './App';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' component={App}></Route>
            <Route path='/jokes' component={Quotes}></Route>
        </Switch>
    </Router>, 
    document.getElementById('root'));