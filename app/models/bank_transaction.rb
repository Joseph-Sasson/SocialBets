class BankTransaction < ApplicationRecord
  has :user, through: :bank_history
end
