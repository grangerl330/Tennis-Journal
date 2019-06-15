class Api::TournamentsController < ApplicationController

  def index
    @tournaments = current_user.tournaments
    render json: @tournaments
  end

end
