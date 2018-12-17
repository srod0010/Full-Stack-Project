import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";


export const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
})

export const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
})

export const fetchEvents = () => dispatch => {
    return APIUtil.fetchEvents()
        .then(events => dispatch(receiveEvents(events)))
}


export const createEvent = event => dispatch => {
    return APIUtil.createEvent(event)
        .then(event => dispatch(receiveEvent(event)))
}
