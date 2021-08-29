class MessengerSerializer < ActiveModel::Serializer
  attributes :id, :user_one, :user_two
end
