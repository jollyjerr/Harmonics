class AddUserToPhrases < ActiveRecord::Migration[5.2]
  def change
    add_reference :phrases, :user, foreign_key: true
  end
end
