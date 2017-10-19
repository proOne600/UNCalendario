class Event < ApplicationRecord
    belongs_to :user
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

    
    
end
