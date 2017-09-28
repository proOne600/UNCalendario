class CreateEventTags < ActiveRecord::Migration[5.1]
  def change
    create_table :event_tags do |t|
      t.integer :event_id
      t.integer :id_category
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
