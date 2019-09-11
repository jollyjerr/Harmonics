class AddKeyToPhrases < ActiveRecord::Migration[5.2]
  def change
    add_column :phrases, :key, :string
  end
end
