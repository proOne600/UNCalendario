class Event < ApplicationRecord
  belongs_to :user
  belongs_to :category, optional: true
  has_many :event_location
  has_many :event_tags
  has_many :event_califications
  has_many :event_comments
  has_many :event_documents
  has_many :favorite_events
  has_many :reviews


  mount_uploader :image, ImageUploader

  validates :name, :description, presence: true

  geocoded_by :address
  after_validation :geocode, if: ->(obj) {obj.address.present? and obj.address_changed?}


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

  def self.publics
    self.where(published: true).count
  end

  def self.privates
    self.where(published: false).count
  end
  
  def self.days
    self.where(created_at: (Time.now - 1.day )..Time.now )
  end
  
  def self.weeks
    self.where(created_at: (Time.now - 1.week )..Time.now )
  end
  
  def self.monts
    self.where(created_at: (Time.now - 1.month )..Time.now )
  end
  
  def self.year
    self.where(created_at: (Time.now - 1.year )..Time.now )
  end
  # @total =self.count
  
  def self.calification(calo)
    self.where(self.reviews.average(:rating).round(2) >= calo)
  end
  
  # def self.domainUN
  #   self.joins(:user).where("user.email.to_s.split('@').last = ?",  "unal.edu.co")
  # end
  
  # def self.parti
  #   self.where(user.email.to_s.split('@').last !=  'unal.edu.co')
  # end


end
