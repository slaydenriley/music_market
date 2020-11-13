class ListingSerializer
  def initialize(listing_object)
    @listing = listing_object
  end

  def to_serialized_json
    options = {
      :only => [
        :title, :price, :description, :id, :user_id],
      include:
        [user: {:only => [:name, :email]}]
    }

    @listing.to_json(options)
  end
end
