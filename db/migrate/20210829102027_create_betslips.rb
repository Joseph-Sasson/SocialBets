class CreateBetslips < ActiveRecord::Migration[6.1]
  def change
    create_table :betslips do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :bet, null: false, foreign_key: true
      t.boolean :winner

      t.timestamps
    end
  end
end
