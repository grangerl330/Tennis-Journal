class Api::RankingsController < ApplicationController
  def index
    @rankings = current_user.rankings
    render json: @rankings
  end

  def create
    @ranking = Ranking.new(ranking_params)
    @ranking.user_id = current_user.id

    if @ranking.save
      render json: @ranking
    else
      render json: {
        error: "This Ranking Failed To Save"
      }
    end
  end

  def update
    @ranking = Ranking.find_by_id(params[:ranking][:id])

    if @ranking.update(ranking_params)
      render json: @ranking
    else
      render json: {
        error: "This Ranking Failed To Update"
      }
    end
  end

  def destroy
    @ranking = Ranking.find_by_id(params[:rankingId])

    render json: {
      notice: "Ranking Successfully Deleted",
    }
  end

  private

  def ranking_params
    params.require(:ranking).permit(:rank, :month, :year, :user_id)
  end

end
