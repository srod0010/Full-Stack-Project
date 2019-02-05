json.join do
    json.extract! @join, :id, :event_id, :user_id
end


json.event do
    json.extract! @join.event, :id, :name, :host_id, :description, :location, :city, :date, :spots
    json.host do
        json.extract! @join.event.host, :username, :email, :city
    end
end