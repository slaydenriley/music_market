class ListingsController < ApplicationController
  def show
    listing = Listing.find_by(id: params[:id])
    render json: ListingSerializer.new(listing).to_serialized_json
  end

  def index
    listings = Listing.all
    render json: ListingSerializer.new(listings).to_serialized_json
  end
end
