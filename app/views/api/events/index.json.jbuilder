json.events do
    @events.each do |event|
        json.set! event.id do 
            json.partial! 'event', event: event
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

