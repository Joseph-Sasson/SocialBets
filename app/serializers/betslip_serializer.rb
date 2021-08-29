class BetslipSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :bet
end
