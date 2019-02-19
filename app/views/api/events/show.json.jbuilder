
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