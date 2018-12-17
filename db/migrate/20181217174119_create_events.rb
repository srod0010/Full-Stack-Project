class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.integer :host_id, null: false
      t.text :description, null: false
      t.string :location, null: false
      t.string :city, null: false
      t.string :date, null: false
      t.boolean :open, default: true, null: false
      t.timestamps
    end
    add_index :events, :name
    add_index :events, :host_id
  end
end
