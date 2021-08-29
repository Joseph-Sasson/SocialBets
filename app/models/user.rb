class User < ApplicationRecord
  has_secure_password
  
  has_many :betslips
  has_many :bets, through: :betslips

  has_many :messages
  has_many :messengers, through: :messages

  has_many :bank_histories
  has_many :bank_transactions, through: :bank_histories

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, :confirmation => true, :length => {:within => 8..15}, on: :create
end
