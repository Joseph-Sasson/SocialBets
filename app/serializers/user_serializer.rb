class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :bank
end
