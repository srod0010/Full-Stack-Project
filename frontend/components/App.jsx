import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';


const App = () => (
    <div>
        
        <h1>Tea?</h1>
        

        <GreetingContainer />
        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignupContainer} />
    </div>
);

export default App;