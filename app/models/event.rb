class Event < ApplicationRecord
    belongs_to :user
    has_many :event_location
    has_many :event_tags
    
    # attr_accessible :id_user
    # attr_accessible :calification
    # attr_accessible :all_calification
    
    
end
