import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div>
        <header>
        <h1>Tea?</h1>

        </header>
        

        <GreetingContainer />
        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignupContainer} />
    </div>
);

export default App;