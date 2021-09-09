class RemoveDateFromBankTransactions < ActiveRecord::Migration[6.1]
  def change
    remove_column :bank_transactions, :date
  end
end
