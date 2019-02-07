json.events do
    @events.each do |event|
        json.set! event.id do 
            json.extract! event, :id, :name, :host_id, :description, :location, :city, :date, :spots
        end
    end
end


json.joins do
    @events.each do |event|
        event.joins.each do |join|
            json.set! join.id do
                json.extract! join, :id, :user_id, :event_id
            end
        end
    end
end
