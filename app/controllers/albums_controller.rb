class AlbumsController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    albums = Album.all
    render json: albums, include: ['reviews', 'reviews.user']
  end

  def create
    album = Album.create!(album_params)
    render json: album, status: :created
  end

  private

  def album_params
    params.permit(:title, :release_date, :artist, :artwork_url)
  end

end
