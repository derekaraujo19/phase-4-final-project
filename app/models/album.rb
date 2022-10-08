class Album < ApplicationRecord
  validates :title, presence: true, uniqueness: true
end
