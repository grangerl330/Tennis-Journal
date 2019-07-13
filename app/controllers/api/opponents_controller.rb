class Api::OpponentsController < ApplicationController

  def index
    @opponents = current_user.opponents
    render json: @opponents
  end

end
