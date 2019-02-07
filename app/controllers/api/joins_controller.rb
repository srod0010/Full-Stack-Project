class Api::JoinsController < ApplicationController
    before_action :require_login

    def create
       
        @join = Join.new(join_params)

        if @join.save
            render :show
        else
            render @join.errors.full_messages, status: 422
        end
    end

    def destroy
        # @join = Join.find_by(event_id: params[:event_id], user_id: current_user.id)
        @join = current_user.joins.find_by(event_id: params[:id])
        @join.destroy
        render :show
    end

    private
    def join_params
        params.require(:join).permit(:event_id, :user_id)
    end
end
