class Album < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :artist, :artwork_url, presence: true

  has_many :reviews
  has_many :users, through: :reviews
end
