class AddWagerAndWinningsToBetslip < ActiveRecord::Migration[6.1]
  def change
    add_column :betslips, :wager, :money
    add_column :betslips, :winnings, :money
  end
end
