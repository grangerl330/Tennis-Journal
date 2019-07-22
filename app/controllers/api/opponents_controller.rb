class Api::OpponentsController < ApplicationController

  def index
    @opponents = current_user.opponents
    render json: @opponents, include: "match,match.tournament"
  end

  def update
    @opponent = Opponent.find_by_id(params[:opponent][:id])

    if @opponent.update(opponent_params)
      render json: @opponent
    else
      render json: {
        error: "This Opponent Failed To Update"
      }
    end
  end

  private

  def opponent_params
    params.require(:opponent).permit(:first_name, :last_name, :age, :handedness, :utr, :notes)
  end
end
