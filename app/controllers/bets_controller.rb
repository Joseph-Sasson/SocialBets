class BetsController < ApplicationController
  
  def index
    bets = Bet.all
    render json: bets
  end

  def settle
    bet = Bet.find_by(id: params[:id])
    if params[:winner] == 'home'
      bet.betslips.each do |betslip|
        if betslip.odds == 'home'
          betslip.winner = true
          betslip.user.bank = betslip.user.bank + betslip.wager + betslip.winnings
          betslip.save
        elsif betslip.odds == 'away'
          betslip.winner = false
          betslip.save
        end
      end
      elsif params[:winner] == 'away'
        bet.betslips.each do |betslip|
          if betslip.odds == 'away'
            betslip.winner = true
            betslip.user.bank = betslip.user.bank + betslip.wager + betslip.winnings
            betslip.save
          elsif betslip.odds == 'home'
            betslip.winner = false
            betslip.save
          end
        end
      end
      bet.save
    render json: bet, status: :accepted
  end

end
