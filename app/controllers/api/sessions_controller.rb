class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by(email: params[:session][:email])

    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      render json: @user
    else
      render json: {
        error: "Invalid Email or Password"
      }
    end
  end

  def get_current_user
    if logged_in?
      current_user.set_current_ranking
      render json: current_user
    else
      render json: {
        error: "No one logged in "
      }
    end
  end

  def authenticate_password
    if params[:user]
      @user = User.find_by_id(params[:user][:id])
    elsif params[:email]
      @user = User.find_by(email: params[:email])
    end

    if @user.authenticate(params[:password])
      render json: {
        isValid: true
      }
    else
      render json: {
        isValid: false
      }
    end
  end

  def authenticate_email
    @email = params[:email]

    @user = User.find_by(email: params[:email])

    if @user
      render json: {
        isValid: false
      }
    else
      render json: {
        isValid: true
      }
    end
  end

  def destroy
    session.clear
    render json: {
      notice: "Successfully logged out"
    }
  end

end
