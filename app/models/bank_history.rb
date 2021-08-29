class BankHistory < ApplicationRecord
  belongs_to :user
  belongs_to :bank_transaction
end
