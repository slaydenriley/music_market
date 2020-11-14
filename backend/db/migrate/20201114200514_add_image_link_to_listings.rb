class AddImageLinkToListings < ActiveRecord::Migration[6.0]
  def change
    add_column :listings, :image_link, :string
  end
end
