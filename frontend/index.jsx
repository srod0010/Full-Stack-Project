import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = configureStore();
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    ReactDOM.render(<Root store={store} />, root)
})

window.signup = signup;
window.login = login;
window.logout = logout;