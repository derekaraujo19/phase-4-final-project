class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :album_id, :title, :body
end
