class AddUserIdToBankTransactions < ActiveRecord::Migration[6.1]
  def change
    add_reference :bank_transactions, :user, null: false, foreign_key: true
  end
end
