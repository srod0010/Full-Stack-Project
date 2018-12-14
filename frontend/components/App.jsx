import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashComponent from './splash/splash';


const App = () => (
    <div className="home-page">
        <header className="main-nav">
            
            <Link className="logo" to="/"><h1>Meals With Strangers</h1></Link>
            <GreetingContainer />
        </header>
        

        <Switch>
            <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <Route path="/" component={SplashComponent} />
        </Switch>
    </div>
);

export default App;