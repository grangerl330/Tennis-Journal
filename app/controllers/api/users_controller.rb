class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.update_match_record

    if @user.save
      render json: @user
      session[:user_id] = @user.id
    else
      render json: {error: "Unable to create new user"}, status: 400
    end
  end

  def update
    @user = User.find_by_id(params[:user][:id])
    @user.update_match_record
    @user.update_points

    if @user.update(user_params)
      render json:  @user
    else
      render json: {
        error: "Profile failed To Update"
      }
    end
  end

  def update_password
    @user = User.find_by_id(params[:user][:id])

    if @user.update(password: params[:newPassword])
      render json: {
        message: "Password successfully changed"
      }
    else
      render json: {
        error: "Password could not be changed"
      }
    end
  end

  def destroy
    @user = User.find_by_id(params[:user][:id])
    @user.destroy

    render json: {
      notice: "Account successfully deleted"
    }
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :utr, :match_record, :ranking, :points, :short_term_goal, :mid_term_goal, :long_term_goal, strengths: [], weaknesses: [])
  end
end
