class UsersController < ApplicationController
  def show
    user = User.find_by(id: params[:id])
    render json: user.to_json
  end

  def index
    users = User.all
    render json: users.to_json
  end
end
