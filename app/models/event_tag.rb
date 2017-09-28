class EventTag < ApplicationRecord
    belongs_to :event
    belongs_to :category

    # attr_accessible :id_category
    # attr_accessible :event_id
end
