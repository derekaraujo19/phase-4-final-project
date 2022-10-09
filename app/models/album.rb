class Album < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :artist, :artwork_url, presence: true
end
