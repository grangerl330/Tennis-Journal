class TournamentsController < ApplicationController

  def index
    binding.pry
    @tournaments = current_user.tournaments
    render json: @tournaments
  end

end
