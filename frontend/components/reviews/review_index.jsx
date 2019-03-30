import React from 'react';
import ReviewItem from './review_item';

const ReviewIndex = ({reviews}) => {
    let reviewItems = reviews.map((review,idx) => <ReviewItem key={review.id} review={review}/>)

   
    return(
        <div className="reviews-container">
            {reviewItems}
        </div>
    )
}

export default ReviewIndex;