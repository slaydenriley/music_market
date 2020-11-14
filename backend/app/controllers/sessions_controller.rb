class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:username])

        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, only: [:username, :name, :id]
        else
          payload = {
            error: "No such user; check the submitted username",
            status: 400
          }
          render :json => payload, :status => :bad_request
        end
    end

    def destroy
        if session[:user_id]
            reset_session
        end
    end
end
