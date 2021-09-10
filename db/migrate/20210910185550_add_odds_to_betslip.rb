class AddOddsToBetslip < ActiveRecord::Migration[6.1]
  def change
    add_column :betslips, :odds, :string
  end
end
