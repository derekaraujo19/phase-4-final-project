class ReviewsController < ApplicationController
  # skip_before_action :authorize, only: [:index]

  def index
    user = User.find_by(id: session[:user_id])
    reviews = user.reviews
    render json: reviews
  end

  def create
    user = User.find_by(id: session[:user_id])
    review = user.reviews.create!(
      album_id: params[:album_id],
      title: params[:title],
      body: params[:body]
    )
    render json: review, status: :created
  end

  # private

  # def review_params
  #   params.permit(:user_id, :album_id, :title, :body)
  # end

end

