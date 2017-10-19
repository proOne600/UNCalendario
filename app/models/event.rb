class Event < ApplicationRecord
   # after_action :creation, only: [:create]
    belongs_to :user
    has_many :event_location
    has_many :event_tags
    has_many :event_califications
    has_many :event_comments
    has_many :event_documents
    has_many :favorite_events
    
   # attr_accessor :image
    #attr_accessible :name 
    #attr_accessible :event_date
    #attr_accessible :even_end_date
    #attr_accessible :description
    
    mount_uploader :image, ImageUploader
    


    # attr_accessible :id_user
    # attr_accessible :calification
    # attr_accessible :all_calification
    
    #def creation
     #   EventMailer.created_event(@event,self).deliver_now
    #end

    
    
end
