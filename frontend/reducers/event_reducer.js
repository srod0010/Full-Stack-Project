import { RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_actions';
import merge from 'lodash/merge';

const eventsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_EVENTS:
            return action.payload.events;
            //action.payload.events
        case RECEIVE_EVENT:
            // debugger
            return merge({}, state, {[action.payload.event.id]: action.payload.event})
        case REMOVE_EVENT:
            let newState = merge({}, state);
            delete newState[action.eventId];
            return newState;
        default:
            return state;
    }
}

export default eventsReducer;

// json.partial!'event', event: @event