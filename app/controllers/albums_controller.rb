class AlbumsController < ApplicationController
  skip_before_action :authorize, only: [:index, :create]

  def index
    albums = Album.all
    render json: albums, include: ['reviews', 'reviews.user']
  end

  def user_albums
    user = User.find_by(id: session[:user_id])
    albums = user.albums
    render json: albums
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
