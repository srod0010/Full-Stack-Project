import React from 'react';

const ReviewItem = ({review}) => {
    
    
    return (
      <div className="review-item-container">
        <img
          src={review.image}
          alt={review.username}
          className="center-review-img"
        />
        <div className="review-item-info">
          <h4>Review By: {review.username}</h4>
          <p>{review.body}</p>
          <h5>
            Reviewer rating: {review.rating}{" "}
                    {review.rating === 1 ? "clap 👏" : "claps 👏"}
          </h5>
        </div>
      </div>
    );
}

export default ReviewItem;

