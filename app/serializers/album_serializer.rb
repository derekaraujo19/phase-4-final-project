class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :release_date, :artist, :artwork_url

  has_many :reviews
end
