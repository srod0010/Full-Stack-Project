import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import EventsReducer from './event_reducer';


export default combineReducers({
    users: UsersReducer,
    events: EventsReducer
})