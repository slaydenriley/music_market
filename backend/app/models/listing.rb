class Listing < ApplicationRecord
  belongs_to :user
  has_many :users_listings
  has_many :users, through: :users_listings

  accepts_nested_attributes_for :user
end
