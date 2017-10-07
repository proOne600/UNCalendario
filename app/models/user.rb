class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, omniauth_providers: [:google_oauth2]
  
  has_many :event
  has_many :event_califications
  has_many :event_comments
  has_many :favorite_events
  has_many :shared_events
  has_many :event_documents
  has_one :user_profiles
  belongs_to :assignments
  
        
         

  	def self.from_omniauth(access_token)
    	data = access_token.info
    	user = User.where(email: data['email']).first

    # Uncomment the section below if you want users to be created if they don't exist
     	unless user
    	    user = User.create(name: data['name'],
    	        email: data['email'],
    	        password: Devise.friendly_token[0,20]
    	     )
    	end
    	user
	end
end
