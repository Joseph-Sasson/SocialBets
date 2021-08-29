class BankHistorySerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :bank_transaction
end
