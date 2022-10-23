class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :created_at
  # :user_id, :album_id,

  belongs_to :album
  belongs_to :user
end
