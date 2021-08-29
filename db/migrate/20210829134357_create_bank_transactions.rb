class CreateBankTransactions < ActiveRecord::Migration[6.1]
  def change
    create_table :bank_transactions do |t|
      t.timestamp :date
      t.money :amount
      t.string :transaction_type

      t.timestamps
    end
  end
end
