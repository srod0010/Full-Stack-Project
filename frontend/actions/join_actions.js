import * as APIUtil from '../util/join_api_util';

export const RECEIVE_JOIN = "RECEIVE_JOIN";
export const DELETE_JOIN = "DELETE_JOIN";



export const receiveJoin = payload => ({
    type: RECEIVE_JOIN,
    payload
})

export const deleteJoin = payload => ({
    type: DELETE_JOIN,
    join: payload.join,
    user: payload.user
    

})

export const createJoin = join => dispatch => {
    APIUtil.createJoin(join).then(payload => 
        dispatch(receiveJoin(payload)))
}

export const removeJoin = id => dispatch => {
    APIUtil.deleteJoin(id).then(payload =>
        dispatch(deleteJoin(payload)))
}