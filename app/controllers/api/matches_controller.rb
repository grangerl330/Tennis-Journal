class Api::MatchesController < ApplicationController

  def index
    @matches = current_user.matches
    render json: @matches
  end

  def create
    @match = Match.new(match_params)
    @match.user_id = current_user.id
    @match.tournament_id = 1

    if @match.save
      render json: @match
    else
      render json: {
        error: "This Match Failed To Save"
      }
    end
  end

  private

  def match_params
    params.require(:match).permit(:round, :result, :score, :date, :time, :notes, :tournament_id, :user_id)
  end
end
