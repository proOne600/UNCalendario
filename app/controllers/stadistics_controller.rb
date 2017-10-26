class StadisticsController < ApplicationController
    
    def show
	    @total_events = Event.total_size
	    @total_users= User.total_size
	    @women=User.total_women
	    @men=User.total_men
	end
end