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
    listing = Listing.new(listing_params)
    binding.pry
    if listing.save
      render json: ListingSerializer.new(listing).to_serialized_json
    else
      payload = {
        error: "Something went wrong. Please try again.",
        status: 400
      }
      render :json => payload, :status => :bad_request
    end
  end

  def edit
    listing = Listing.find_by(id: params[:id])
    listing.update(listing_params)
    if listing.save
      render json: ListingSerializer.new(listing).to_serialized_json
    else

      payload = {
        error: "Something went wrong. Please try again.",
        status: 400
      }
      render :json => payload, :status => :bad_request
    end
  end

  def destroy
    listing = Listing.find_by(id: params[:id])
    listing.destroy
    render json: listing
  end

  private

  def listing_params
    params.require(:listing).permit(
      :title,
      :price,
      :description,
      :user_id,
      :id,
      :image_link
    )
  end
end
