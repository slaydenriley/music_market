class User < ApplicationRecord
  has_many :listings
  has_many :favorites


  has_secure_password

  validates :name, presence: true
  validates :email, presence: true
  validates :password_digest, presence: true, on: :create

end
