class EventLocation < ApplicationRecord
    belongs_to :event
    
    attr_accessible :event_id
end
