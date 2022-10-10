class ReviewsController < ApplicationController
  # skip_before_action :authorize, only: [:index]

  def index
    user = User.find(params[:user_id])
    reviews = user.reviews
    render json: reviews
  end

  def create
    review = Review.create!(review_params)
    render json: review, status: :created
  end

  private

  def review_params
    params.permit(:user_id, :album_id, :title, :body)
  end

end

