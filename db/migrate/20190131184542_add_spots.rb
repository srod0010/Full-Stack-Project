class AddSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :spots, :integer, default: 4
  end
end
