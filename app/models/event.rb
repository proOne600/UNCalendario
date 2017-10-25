class Event < ApplicationRecord
    belongs_to :user
    belongs_to :category
    has_many :event_location
    has_many :event_tags
    has_many :event_califications
    has_many :event_comments
    has_many :event_documents
    has_many :favorite_events
    
    attr_accessor :image
    
    mount_uploader :image, ImageUploader
    validates :name, :description, presence: true

    


    # attr_accessible :id_user
    # attr_accessible :calification
    # attr_accessible :all_calification
    
    #def creation
     #   EventMailer.created_event(@event,self).deliver_now
    #end
    
    def start_time
        self.event_date ##Where 'start' is a attribute of type 'Date' accessible through MyModel's relationship
    end
    
    def end_time
        self.even_end_date ##Where 'start' is a attribute of type 'Date' accessible through MyModel's relationship
    end
    
    #def total_size
    #    Event.count
    #end

    
    
end
