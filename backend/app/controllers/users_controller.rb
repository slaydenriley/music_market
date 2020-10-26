class UsersController < ApplicationController
  def show
    user = User.find_by(id: params[:id])
    render json: UserSerializer.new(user).to_serialized_json
  end

  def index
    users = User.all
    render json: UserSerializer.new(users).to_serialized_json
  end

  def create
    user = User.find_or_create_by(username: params[:username])
    user.name = params[:name]
    if params[:password] == params[:confirm_password]
      user.password_digest = params[:password]
      user.save
    else
      render plain: "Didn't work"
    end
  end
end
