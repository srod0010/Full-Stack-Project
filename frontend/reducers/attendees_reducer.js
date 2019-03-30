import { RECEIVE_JOIN, DELETE_JOIN } from '../actions/join_actions';
import {RECEIVE_EVENTS, RECEIVE_EVENT} from '../actions/event_actions'
import merge from 'lodash/merge';

const defaultState = {};
const attendeeReducer = (state = defaultState, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_EVENT:
            if (action.payload.attendees){
                return action.payload.attendees;
            } else {
                return state;
            }
        case DELETE_JOIN:
            const userId = action.user.id;
            let newObj = merge({},state);
            delete newObj[userId]
            return newObj;
        default:
            return state;
    }
}

export default attendeeReducer;