class Api::EventsController < ApplicationController
    before_action :require_login, only: [:create, :destroy]

    def index
        @events = Event.all
        render 'api/events/index'
    end

    def show
        @event = Event.find(params[:id])
        render 'api/events/show'
    end

    def create
        @event = Event.new(event_params)
        @event.host_id = current_user.id

        if @event.save
            render 'api/events/show'
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def update
        @event = Event.find(params[:id])

        if @event.update(event_params)
            render 'api/events/show'
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def destroy
        @event = current_user.events.find(params[:id])

        if @event.destroy
            render 'api/events/show'
        else
            render json: @event.errors.full_messages, status: 422
        end
    end


    private

    def event_params
        params.require(:event).permit(:name, :description, :location, :city, :date, :open)
    end
end
