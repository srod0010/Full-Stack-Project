import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import * as command from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = configureStore();
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.signup = signup;
    window.login = command.login;
    window.logout = command.logout;
    ReactDOM.render(<Root store={store} />, root)
})

