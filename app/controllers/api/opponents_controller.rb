class Api::OpponentsController < ApplicationController

  def index
    @opponents = current_user.opponents
    render json: @opponents, include: "match,match.tournament"
  end

end
