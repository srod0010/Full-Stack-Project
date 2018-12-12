import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = configureStore();
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    ReactDOM.render(<h1>hello savi</h1>, root)
})

window.signup = signup;
window.login = login;
window.logout = logout;