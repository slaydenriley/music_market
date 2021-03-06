class UserSerializer
  def initialize(user_object)
    @user = user_object
  end

  def to_serialized_json
    @user.to_json(:only => [:name, :username, :password, :password_confirmation, :email, :description, :id, :listings], include: [:listings, :favorites])
  end
end
