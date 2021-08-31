class Betslip < ApplicationRecord
  belongs_to :user
  belongs_to :bet

  validates :wager, presence: true
end
