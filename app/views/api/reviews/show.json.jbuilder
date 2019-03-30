json.reviews do
    json.set! @review.id do 
        json.extract! @review, :id, :body, :rating, :user_id
        json.extract! @review.user, :username, :image
    end
end