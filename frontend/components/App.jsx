import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';
import EventIndexContainer from './events/event_index_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashComponent from './splash/splash';
import CreateEventFormContainer from './events/create_event_form_container';


const App = () => (
    <div className="home-page">
        <header className="main-nav">
            <Link className="logo" to="/"><h1>Meals With Strangers</h1></Link>
            <GreetingContainer />
        </header>
        

        <Switch>
            <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <Route exact path="/events" component={EventIndexContainer} />
            {/* <Route exact path="/events/:eventId" component={EventShowContainer} /> */}
            <Route path="/events/new" component={CreateEventFormContainer} />
            <Route path="/" component={SplashComponent} />
        </Switch>
    </div>
);

export default App;