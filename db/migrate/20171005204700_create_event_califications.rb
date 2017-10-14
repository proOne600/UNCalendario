class CreateEventCalifications < ActiveRecord::Migration[5.1]
  def change
    create_table :event_califications do |t|
      t.integer :event_id
      t.integer :user_id
      t.integer :calification

      t.timestamps
    end
  end
end
