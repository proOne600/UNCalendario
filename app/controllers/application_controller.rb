class ApplicationController < ActionController::Base
	protect_from_forgery with: :exception
	
	def stadistics
	    @total_events = Event.total_size
	    @total_users= User.total_size
	end
#	@events.


end
