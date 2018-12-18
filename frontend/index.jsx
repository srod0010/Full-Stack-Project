import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './util/session_api_util';
// import {fetchEvents, createEvent} from './util/event_api_util';
import {updateEvent, deleteEvent} from './util/event_api_util';
import {fetchEvents, createEvent} from './actions/event_actions';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchEvents = fetchEvents;
    window.createEvent = createEvent;
    window.updateEvent = updateEvent;
    window.deleteEvent = deleteEvent;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
})

