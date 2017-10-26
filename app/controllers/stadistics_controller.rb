class StadisticsController < ApplicationController
    
    def show
	    @total_events = Event.total_size
	    @total_users= User.total_size
	    @women=User.total_women
	    @men=User.total_men
	end
	
	def get_data
        send_data generate_stadistics,
              filename: "Estadisticas.pdf",
              type: "application/pdf"
    end
	
	private
	
	def generate_stadistics
        Prawn::Document.new do
            text "Estadisticas", align: :center
            text "Numero total de eventos: #{Event.total_size}"
            text "Numero total de usuarios: #{User.total_size}"
            text "Mujeres registradas: #{User.total_women}"
            text "Hombres registrados: #{User.total_men}"
        end.render
    end
end