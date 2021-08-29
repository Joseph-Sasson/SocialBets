class BetSerializer < ActiveModel::Serializer
  attributes :id, :sports_title, :date, :home_team, :away_team, :home_odds, :away_odds
end
