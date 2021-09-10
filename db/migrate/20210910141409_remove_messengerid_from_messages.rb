class RemoveMessengeridFromMessages < ActiveRecord::Migration[6.1]
  def change
    remove_column :messages, :messenger_id
  end
end
