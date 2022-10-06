class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  #Log In
  def create

    # finde user by username
    user = User.find_by(username: params[:username])
    # byebug
    # if user and authenticated password exists
    if user&.authenticate(params[:password])
      # set id on session hash
      session[:user_id] = user.id
      # return json response
      render json: user
    else
      # if user doesn't exist and password isn't authenticated
      render json: {error: "Invalid username or password"}, status: :unauthorized
    end
  end


  # Log Out
  def destroy
    session.delete :user_id
    head :no_content
  end




end