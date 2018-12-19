import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <button className="greeting-button">
                <Link to="/login">Login</Link>
            </button>
            
            <button className="greeting-button-signup">
                <Link to="/signup">Sign up!</Link>
            </button>
           
            
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            {/* <h2 className="header-name">Hi, {currentUser.username}!</h2> */}
            <Link className="header-button nav" to="/events">Events</Link>
            <Link className="header-button nav" to="/events/new">Host</Link>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;