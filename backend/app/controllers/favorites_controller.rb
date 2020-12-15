class FavoritesController < ApplicationController
  def create
    favorite = Favorite.new(favorite_params)
    if favorite.save
      render json: {user_id: favorite_params[:user_id], listing_id: favorite_params[:listing_id]}
    else
      binding.pry
    end
  end

  def delete
  end

  private

  def favorite_params
    params.require(:favorite).permit(
      :user_id,
      :listing_id
    )
  end
end
