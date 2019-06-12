class Api::MatchesController < ApplicationController

  def index
    @matches = Match.all
    render json: @matches
  end

  def create
    @match = Match.new(match_params)

    if @match.save
      render json: @match
    else
      render json: {errors: {message: "This Match Failed To Save"}}
    end
  end

  private

  def match_params
    params.require(:match).permit(:round, :result, :score)
  end
end
