class Bet < ApplicationRecord
  has_many :betslips
  has_many :users, through: :betslips

  # Go to branch 'settle' to work on settling bets
end
