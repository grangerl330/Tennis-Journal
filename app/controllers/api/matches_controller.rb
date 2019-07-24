class Api::MatchesController < ApplicationController

  def index
    @matches = current_user.matches
    render json: @matches
  end

  def create
    @match = Match.new(match_params)
    @match.build_opponent
    @match.opponent.first_name = params[:match][:opponent_first_name]
    @match.opponent.last_name = params[:match][:opponent_last_name]
    @match.user_id = current_user.id

    if @match.save
      current_user.update_match_record
      render json: @match
    else
      render json: {
        error: "This Match Failed To Save"
      }
    end
  end

  def update
    @match = Match.find_by_id(params[:match][:id])

    if @match.update(match_params)
      current_user.update_match_record
      render json: @match
    else
      render json: {
        error: "This Match Failed To Update"
      }
    end
  end

  def destroy
    @match = Match.find_by_id(params[:matchId])
    @match.destroy
    current_user.update_match_record
    
    render json: {
      notice: "Match Successfully Deleted",
      matchId: params[:matchId]
    }
  end

  private

  def match_params
    params.require(:match).permit(:round, :result, :score, :date, :time, :notes, :tournament_id, :user_id)
  end
end
