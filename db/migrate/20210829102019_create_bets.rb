class CreateBets < ActiveRecord::Migration[6.1]
  def change
    create_table :bets do |t|
      t.string :sports_title
      t.string :date
      t.string :home_team
      t.string :away_team
      t.string :home_odds
      t.string :away_odds

      t.timestamps
    end
  end
end
