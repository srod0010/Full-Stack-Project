import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";



export const receiveReview = ( payload ) => ({
    type: RECEIVE_REVIEW,
    payload
})


export const createReview = review => dispatch => {
    console.log('HI')
        APIUtil.createReview(review).then(payload => dispatch(receiveReview(payload)))

}

