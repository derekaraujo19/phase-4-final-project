class Review < ApplicationRecord
  validates :title, :body, :album_id, presence: true

  belongs_to :album
  belongs_to :user
end
