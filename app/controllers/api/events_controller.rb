class Api::EventsController < ApplicationController
    before_action :require_login, only: [:create, :destroy]

    def index
        @events = Event.all
        render 'api/events/index'
    end

    def show
        @event = Event.find(params[:id])
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

    end

    def destroy
    end


    private

    def event_params
        params.require(:event).permit(:name, :description, :location, :city, :date, :open)
    end
end
