class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :created_at

  belongs_to :album
  belongs_to :user
end
