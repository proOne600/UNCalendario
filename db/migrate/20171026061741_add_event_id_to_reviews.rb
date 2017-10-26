class AddEventIdToReviews < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :event_id, :integer
  end
end
