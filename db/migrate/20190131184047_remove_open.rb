class RemoveOpen < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :open
  end
end
