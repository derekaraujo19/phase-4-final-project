class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :album_id, :title, :body, :created_at

  belongs_to :album
  belongs_to :user
end
