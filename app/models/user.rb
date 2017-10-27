class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  after_create :send_auth_mail
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable,:omniauthable, 
         omniauth_providers: [:google_oauth2, :facebook]

  has_many :event
  has_many :event_califications
  has_many :event_comments
  has_many :favorite_events
  has_many :shared_events
  has_many :event_documents
  has_one :user_profiles
  has_many :reviews

  # belongs_to :assignments
  
  def send_auth_mail
    UserMailer.delay.welcome_email(self)
  end
  
  def self.total_size
    self.count
  end
  
  def self.total_women
    self.where(is_female: true).count
  end
  
  def self.total_men
    self.where(is_female: false).count
  end

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0, 20]
      user.name = auth.info.name
      # user.image = auth.info.image # assuming the user model has an image
      # If you are using confirmable and the provider(s) you use validate emails,
      # uncomment the line below to skip the confirmation emails.
    end
  end

end
