class ListingsController < ApplicationController
  def show
    listing = Listing.find_by(id: params[:id])
    render json: listing.to_json
  end

  def index
    listings = Listing.all
    render json: listings.to_json
  end
end
