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
    listing_id = params[:listing_id].to_i
    favorite = Favorite.find_by(listing_id: listing_id)
    favorite.delete
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
