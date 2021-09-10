class BetslipsController < ApplicationController
  wrap_parameters format: []
  before_action :authorize, only: [:create]

  def index
    betslips = Betslip.all
    render json: betslips
  end

  def create
    betslip = Betslip.create(betslip_params)
    user = User.find_by(id: session[:user_id])
    betslip.user_id = user.id
    if betslip.wager.to_i <= 0
      render json: {errors: "You must wager atleast $1!"}
    else
      betslip.save
      render json: betslip, status: :created
    end
  end

  private

  def betslip_params
    params.permit(:wager, :winnings, :bet_id, :odds)
  end
  def authorize
    render json: {errors: "You must be logged in to place a bet!"}, status: :unauthorized unless session.include? :user_id
  end
end
