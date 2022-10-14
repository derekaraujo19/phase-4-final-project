class ReviewsController < ApplicationController


  def index
    user = User.find_by(id: session[:user_id])
    reviews = user.reviews
    render json: reviews
  end

  def create
    user = User.find_by(id: session[:user_id])
    review = user.reviews.create!(review_params)
    render json: review, status: :created
  end

  private

  def review_params
    params.permit(:album_id, :title, :body)
  end

end

