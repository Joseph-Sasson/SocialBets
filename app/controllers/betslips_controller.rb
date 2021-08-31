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
    betslip.bet_id = params[:bet]
    betslip.save
    render json: betslip, status: :created
  end

  private

  def betslip_params
    params.permit(:wager, :winnings)
  end
  def authorize
    render json: {errors: "Not authorized"}, status: :unauthorized unless session.include? :user_id
  end
end
