class BankTransactionSerializer < ActiveModel::Serializer
  attributes :id, :date, :amount, :transaction_type

  # def date
  #   date.strftime("%A, %d %b %Y %l:%M %p")
  # end
end
