class Api::MatchesController < ApplicationController

  def index
    @matches = currentUser.matches 
    render json: @matches
  end

  def create
    @match = Match.new(match_params)

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
    params.require(:match).permit(:round, :result, :score)
  end
end
