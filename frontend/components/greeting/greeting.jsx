import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link className="header-button nav" to="/events">Events</Link>
            <Link className="header-button nav" to="/events/new">Host</Link>
            
            <Link className="header-button nav" to="/login">Login</Link>
            
            <button className="greeting-button-signup">
                <Link className="sign-up-button"to="/signup">SIGN UP</Link>
            </button>
           
            
        </nav>
    );
    const personalGreeting = () => (
        <nav className="login-signup">
            {/* <h2 className="header-name">Hi, {currentUser.username}!</h2> */}
            <Link className="header-button nav" to="/events">Events</Link>
            <Link className="header-button nav" to="/events/new">Host</Link>
            <Link className="header-button nav" to="/dashboard">Dashboard</Link>
            <button className="greeting-button-signup logout" onClick={logout}>Log Out</button>
        </nav>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;