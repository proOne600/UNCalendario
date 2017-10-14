class CreateUserProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :user_profiles do |t|
      t.string :name
      t.string :last_name
      t.date :birth
      t.integer :user_id

      t.timestamps
    end
  end
end
