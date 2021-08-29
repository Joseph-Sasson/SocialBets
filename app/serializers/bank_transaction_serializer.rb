class BankTransactionSerializer < ActiveModel::Serializer
  attributes :id, :date, :amount, :transaction_type
end
