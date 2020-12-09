class User < ApplicationRecord
  has_many :listings
  has_secure_password

  validates :name, presence: true
  validates :email, presence: true
  validates :description, presence: true
  validates :password,
    presence: true,
    confirmation: true,
    on: :create

end
