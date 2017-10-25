class Category < ApplicationRecord
  has_many :events
  has_many :event_tags
end
