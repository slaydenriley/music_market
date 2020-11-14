class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.string :title
      t.attachment :image
      t.integer :listing_id
      
      t.timestamps
    end
  end
end
