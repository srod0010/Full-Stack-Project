import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import EventsReducer from './event_reducer';
import JoinsReducer from './join_reducer';
import AttendeesReducer from './attendees_reducer';
import ReviewsReducer from './reviews_reducer';


export default combineReducers({
    users: UsersReducer,
    events: EventsReducer,
    joins: JoinsReducer,
    attendees: AttendeesReducer,
    reviews: ReviewsReducer
})