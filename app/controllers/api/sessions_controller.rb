class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by(email: params[:session][:email])

    if @user && @user.authenticate(params[:session][:email])
      session[:user_id] = @user.id
      render json: @user
    else
      render json: {
        error: "Invalid Credentials"
      }
    end
  end

end
