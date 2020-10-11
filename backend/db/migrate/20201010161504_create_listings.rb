class CreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :listings do |t|
      t.string :title
      t.string :price
      t.string :description
      t.integer :user_id

      t.timestamps
    end
  end
end
