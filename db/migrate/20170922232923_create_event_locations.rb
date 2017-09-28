class CreateEventLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :event_locations do |t|
      t.string :coordinates
      t.integer :event_id
      t.string :name

      t.timestamps
    end
  end
end
