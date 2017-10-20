class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  after_create :send_auth_mail
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, omniauth_providers: [:google_oauth2, :facebook]

  has_many :event
  has_many :event_califications
  has_many :event_comments
  has_many :favorite_events
  has_many :shared_events
  has_many :event_documents
  has_one :user_profiles

  # belongs_to :assignments
  
  def send_auth_mail
    UserMailer.delay.welcome_email(self)
  end


  # def self.from_omniauth(access_token)
  #   data = access_token.info
  #   user = User.where(email: data['email']).first
  #
  #   # Uncomment the section below if you want users to be created if they don't exist
  #   unless user
  #     user = User.create(name: data['name'],
  #                        email: data['email'],
  #                        password: Devise.friendly_token[0, 20]
  #     )
  #   end
  #   user
  # end

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

  def self.new_with_session(params, session)
    super.tap do |user|
      if (data = session['devise.facebook_data'] && session['devise.facebook_data']['extra']['raw_info'])
        user.email = data['email'] if user.email.blank?
      end
    end
  end

end
