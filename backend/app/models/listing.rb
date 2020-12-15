class Listing < ApplicationRecord
  belongs_to :user
  has_many :favorites
  has_many :users, through: :favorites

  accepts_nested_attributes_for :user
end
