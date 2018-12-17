import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";

export const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
})

export const fetchEvents = () => dispatch => {
    return APIUtil.fetchEvents()
        .then(events => dispatch(receiveEvents(events)))
}