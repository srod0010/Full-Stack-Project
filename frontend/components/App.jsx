import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';


const App = () => (
    <div>
        <header>
            <h1>Tea?</h1>
        </header>
        
        <GreetingContainer />
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;