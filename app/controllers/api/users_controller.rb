class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user
    else
      render json: {error: "Unable to create new user"}, status: 400
    end
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :email, :password)
  end
end
