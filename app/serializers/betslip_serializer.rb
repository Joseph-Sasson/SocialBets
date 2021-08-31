class BetslipSerializer < ActiveModel::Serializer
  attributes :id, :wager, :winnings, :winner
  has_one :user
  has_one :bet
end
