class ListingSerializer
  def initialize(listing_object)
    @listing = listing_object
  end

  def to_serialized_json
    @listing.to_json(:only => [:title, :price, :description, :id])
  end
end
