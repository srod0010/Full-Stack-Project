import {RECEIVE_REVIEW} from '../actions/review_actions';
import {RECEIVE_EVENT} from '../actions/event_actions';
import merge from 'lodash/merge';

const reviewReducer = (state ={}, action) =>{
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_REVIEW:
            return merge({},state,action.payload.reviews);
        case RECEIVE_EVENT:
            if (action.payload.reviews){
                return merge({}, state, action.payload.reviews)
            } else {
                return state;
            }
        default:
            return {};
    }
}


export default reviewReducer;