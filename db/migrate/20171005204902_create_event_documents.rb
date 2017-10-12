class CreateEventDocuments < ActiveRecord::Migration[5.1]
  def change
    create_table :event_documents do |t|
      t.integer :event_id
      t.integer :user_id
      t.string :name
      t.string :file

      t.timestamps
    end
  end
end
