class ListingSerializer
  def initialize(listing_object)
    @listing = listing_object
  end

  def to_serialized_json
    options = {
      :only => [
        :title, :price, :description, :id, :user_id, :image_link],
      include:
        [user: {:only => [:name, :email]}, favorites: {:only => [:user_id, :listing_id]}]
    }

    @listing.to_json(options)


  end
end
