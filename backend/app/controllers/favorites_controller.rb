class FavoritesController < ApplicationController

  def index
    favorites = Favorite.find_by(user_id: params[:user_id])
  end

  def create
    favorite = Favorite.new(favorite_params)
    if favorite.save
      render json: {user_id: favorite_params[:user_id], listing_id: favorite_params[:listing_id]}
    else

    end
  end

  def delete
    listing_id = favorite_params[:listing_id].to_i
    user_id = favorite_params[:user_id]
    favorite = Favorite.where(listing_id: params[:listing_id], user_id: params[:user_id])
    Favorite.delete(favorite)
    render json: favorite
  end

  private

  def favorite_params
    params.require(:favorite).permit(
      :user_id,
      :listing_id
    )
  end
end
