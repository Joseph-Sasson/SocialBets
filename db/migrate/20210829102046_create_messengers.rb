class CreateMessengers < ActiveRecord::Migration[6.1]
  def change
    create_table :messengers do |t|
      t.integer :user_one
      t.integer :user_two

      t.timestamps
    end
  end
end
