class CreateBankHistories < ActiveRecord::Migration[6.1]
  def change
    create_table :bank_histories do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :bank_transaction, null: false, foreign_key: true

      t.timestamps
    end
  end
end
