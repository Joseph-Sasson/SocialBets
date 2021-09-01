class BetslipSerializer < ActiveModel::Serializer
  attributes :id, :wager, :winnings, :winner, :created_at
  has_one :user
  has_one :bet
end
