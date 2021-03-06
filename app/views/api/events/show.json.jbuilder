
json.event do
   json.extract! @event, :id, :name, :host_id, :description, :location, :city, :date, :spots
   json.image @event.host.image
   
end

json.joins do
    @event.joins.each do |join|
        json.set! join.id do
            json.extract! join, :id, :user_id, :event_id
        end
    end
end

json.attendees do 
   @event.attendees.each do |attendee|
    json.set! attendee.id do
        json.extract! attendee, :id, :username, :email, :city, :image
    end
   end
end

json.reviews do
    @event.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :id, :body, :rating, :user_id
            json.extract! review.user, :username, :image
        end
    end
end



