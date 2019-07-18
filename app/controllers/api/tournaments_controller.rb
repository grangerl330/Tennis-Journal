class Api::TournamentsController < ApplicationController

  def index
    @tournaments = current_user.tournaments
    render json: @tournaments
  end

  def create
    @tournament = Tournament.new(tournament_params)
    @tournament.user_id = current_user.id

    if @tournament.save
      render json: @tournament
    else
      render json: {
        error: "This Tournament Failed To Save"
      }
    end
  end

  def update
    @tournament = Tournament.find_by_id(params[:tournament][:id])
    
    if @tournament.update(tournament_params)
      render json: @tournament
    else
      render json: {
        error: "This Tournament Failed To Update"
      }
    end
  end

  def destroy
    @tournament = Tournament.find_by_id(params[:tournamentId])
    @tournament.destroy

    render json: {
      notice: "Tournament Successfully Deleted",
      tournamentId: params[:tournamentId]
    }
  end

  private

  def tournament_params
    params.require(:tournament).permit(:title, :start_date, :end_date, :location, :surface, :age_category, :draw_size, :points, :user_id)
  end

end
