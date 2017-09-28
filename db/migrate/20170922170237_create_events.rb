class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :name
      t.text :description
      t.boolean :published
      t.boolean :cancelled
      t.integer :id_user
      t.datetime :event_date
      t.time :event_init_hour
      t.time :event_end_hour
      t.datetime :even_end_date
      t.float :calification
      t.integer :all_calification

      t.timestamps
    end
  end
end
