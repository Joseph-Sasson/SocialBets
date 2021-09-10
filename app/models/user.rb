class User < ApplicationRecord
  has_secure_password
  
  has_many :betslips
  has_many :bets, through: :betslips

  has_many :messages

  has_many :bank_transactions

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, :confirmation => true, :length => {:within => 8..15}, on: :create
end
