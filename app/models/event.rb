class Event < ApplicationRecord
    belongs_to :user
    belongs_to :category,  optional: true
    has_many :event_location
    has_many :event_tags
    has_many :event_califications
    has_many :event_comments
    has_many :event_documents
    has_many :favorite_events
    has_many :reviews


    attr_accessor :image
    
    mount_uploader :image, ImageUploader
    validates :name, :description, presence: true

    geocoded_by :address
    after_validation :geocode, :if => :address_changed?


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
    
    
    #@total_size = Event.all.count
    def self.total_size
      self.count
    end
   # @total =self.count

    
    
end
