class BetslipSerializer < ActiveModel::Serializer
  attributes :id, :wager, :winnings, :winner, :bet_time, :odds
  has_one :user
  has_one :bet

  def bet_time
    date = object.created_at
    date.strftime("%A, %d %b %Y %l:%M %p")
  end
end
