class AlbumsController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    albums = Album.all
    render json: albums
  end


end
