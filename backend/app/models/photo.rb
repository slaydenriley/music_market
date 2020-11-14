class Photo < ApplicationRecord
  belongs_to :listing
  has_attached_file :image
end
