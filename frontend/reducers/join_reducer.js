import { RECEIVE_JOIN, DELETE_JOIN } from '../actions/join_actions';
import {RECEIVE_EVENTS, RECEIVE_EVENT} from '../actions/event_actions'
import merge from 'lodash/merge';

const joinReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {

        case RECEIVE_JOIN:
        // debugger
            return merge({}, state, {[action.payload.join.id]: action.payload.join});
        case DELETE_JOIN:
        // debugger
            let newState = merge({}, state);
            delete newState[action.join.id];
            return newState;
        case RECEIVE_EVENTS:
        // debugger
            if(action.payload.joins) {
                return action.payload.joins;
            } else {
                return {};
            }
        case RECEIVE_EVENT:
        // debugger
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

// json.joins do
//     @events.each do |event|
//         event.joins.each do |join|
//             json.set! join.id do
//                 json.extract! join, :id, :user_id, :event_id
//             end
//         end
//     end
// end

        //  json.partial!'event', event: event