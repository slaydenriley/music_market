class ListingsController < ApplicationController
  def show
    listing = Listing.find_by(id: params[:id])
    render json: ListingSerializer.new(listing).to_serialized_json
  end

  def index
    listings = Listing.all
    render json: ListingSerializer.new(listings).to_serialized_json
  end

  def create
    listing = Listing.create(title, price, description)
    if save
      render json: ListingSerializer.new(listing).to_serialized_json
    else
      render text: "Nope!"
    end
  end
end
