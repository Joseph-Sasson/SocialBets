class Message < ApplicationRecord
  belongs_to :user

  validates :message, :length => {minimum: 1}
end
