class ReviewsController < ApplicationController

  def index
    user = User.find_by(id: session[:user_id])
    reviews = user.reviews
    sorted = reviews.order(id: :desc)
    render json: sorted
  end

  def create
    user = User.find_by(id: session[:user_id])
    review = user.reviews.create!(review_params)
    render json: review, status: :created
  end

  def update
    review = Review.find(params[:id])
    review.update!(
      user_id: session[:user_id],
      title: params[:title],
      body: params[:body]
    )
    render json: review, status: :created
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    head :no_content
  end

  private

  def review_params
    params.permit(:album_id, :title, :body)
  end

end

