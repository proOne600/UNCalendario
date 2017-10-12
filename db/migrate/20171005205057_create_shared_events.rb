class CreateSharedEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :shared_events do |t|
      t.integer :event_id
      t.integer :user_id
      t.string :social_network

      t.timestamps
    end
  end
end
