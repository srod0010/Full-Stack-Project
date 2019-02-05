import { RECEIVE_JOIN, DELETE_JOIN } from '../actions/join_actions';
import {RECEIVE_EVENTS} from '../actions/event_actions'
import merge from 'lodash/merge';

const joinReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {

        case RECEIVE_JOIN:
        // debugger
            return merge({}, state, {[action.payload.join.id]: action.payload.join});
        case DELETE_JOIN:
            let newState = merge({}, state);
            delete newState[action.join.id];
            return newState;
        case RECEIVE_EVENTS:
            if(action.payload.joins) {
                return action.payload.joins;
            } else {
                return {};
            }

        default:
            return state;
    }
}

export default joinReducer;