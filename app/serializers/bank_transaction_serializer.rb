class BankTransactionSerializer < ActiveModel::Serializer
  attributes :id, :amount, :transaction_type, :bank_time
  has_one :user

  def bank_time
    date = object.created_at
    date.strftime("%A, %d %b %Y %l:%M %p")
  end
end
