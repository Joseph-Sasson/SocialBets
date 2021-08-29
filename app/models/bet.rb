class Bet < ApplicationRecord
  has_many :betslips
  has_many :users, through: :betslips
end
