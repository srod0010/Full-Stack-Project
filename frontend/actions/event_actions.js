import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";


export const receiveEvents = payload => ({
    type: RECEIVE_EVENTS,
    payload
})

export const receiveEvent = payload => ({
    type: RECEIVE_EVENT,
    payload
})

export const removeEvent = event => ({
    type: REMOVE_EVENT,
    eventId: event.id
})


export const fetchEvents = () => dispatch => {
    return APIUtil.fetchEvents()
        .then(payload => dispatch(receiveEvents(payload)))
}

export const fetchEvent = id => dispatch => {
    return APIUtil.fetchEvent(id)
        .then(event => dispatch(receiveEvent(event)))
}

export const createEvent = event => dispatch => {
    return APIUtil.createEvent(event)
        .then(event => dispatch(receiveEvent(event)))
}

export const updateEvent = event => dispatch => {
    return APIUtil.updateEvent(event)
        .then(event => dispatch(receiveEvent(event)))
}

export const deleteEvent = id => dispatch => {
    return APIUtil.deleteEvent(id)
        .then(event => dispatch(removeEvent(event)))
}
