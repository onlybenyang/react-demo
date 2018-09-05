import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import Home from 'pages/Home';
import Page1 from 'pages/Page1';
import CounterContainer from 'pages/CounterContainer';
import UserInfoContainer from 'pages/UserInfoContainer';

const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">Counter page</Link></li>
                <li><Link to="/userInfo">UserInfo page</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/counter" component={CounterContainer}/>
                <Route path="/userInfo" component={UserInfoContainer}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;
