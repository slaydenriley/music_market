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
    user = User.new(user_params)
    if user.save
      render json: UserSerializer.new(user).to_serialized_json
      session[:user_id] = user.id
    else
      payload = {
        error: "Something went wrong. Please try again.",
        status: 400
      }
      render :json => payload, :status => :bad_request
    end
  end

  def edit
    user = User.find_by(id: params[:id])
    user.update(user_params)
    if user.save
      render json: UserSerializer.new(user).to_serialized_json
    else
      payload = {
        error: "Something went wrong. Please try again.",
        status: 400
      }
      render :json => payload, :status => :bad_request
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :name,
      :email,
      :username,
      :password,
      :password_confirmation,
      :description,
      :id
    )
  end
end
