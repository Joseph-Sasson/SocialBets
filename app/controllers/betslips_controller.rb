class BetslipsController < ApplicationController

  def index
    betslips = Betslip.all
    render json: betslips
  end

  def create
    betslip = Betslip.create(betslip_params)
  end

  private

  def betslip_params
    params.permit(:user_id, :bet_id, :wager)
  end
end
