class Api::ReviewsController < ApplicationController
    before_action :require_login

    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id

        if @review.save!
            render :show
        else
            render json: @review, status: :unprocessable_entity
        end
    end

    private
    def review_params
        params.require(:review).permit(:body, :rating, :event_id)
    end
end
