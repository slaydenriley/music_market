
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
    binding.pry
    if user.save
      render json: UserSerializer.new(user).to_serialized_json
      session[:user_id] = user.id
    else
      binding.pry
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :name,
      :email,
      :username,
      :password,
      :password_confirmation
    )
  end
end
