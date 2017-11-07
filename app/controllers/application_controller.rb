class ApplicationController < ActionController::Base
	protect_from_forgery with: :exception
 before_action :configure_permitted_parameters, if: :devise_controller?
 
  protected
 
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:name, :email, :password, :password_confirmation, :date_of_birth, :is_female, :remember_me, :avatar, :avatar_cache) }
    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:name, :password, :password_confirmation, :date_of_birth, :is_female, :current_password, :avatar, :avatar_cache, :remove_avatar) }
  end
#	@events.

end
