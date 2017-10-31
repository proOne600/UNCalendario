class StadisticsController < ApplicationController
    
    def index
        @total_events = Event.total_size
	    @total_users= User.total_size
	    @women=User.total_women
	    @men=User.total_men
	    @categorias=Category.all
	    @num_privates=Event.privates
	    @num_publics=Event.publics
	    
	    respond_to do |format|
	        format.html
	        format.json
	        format.pdf { render template: 'stadistics/report', pdf:'Reporte'}
	    end
	end
    
    def show
	    @total_events = Event.total_size
	    @total_users= User.total_size
	    @women=User.total_women
	    @men=User.total_men
	    @categorias=Category.all
	    @num_privates=Event.privates
	    @num_publics=Event.publics
	    respond_to do |format|
	        format.html
	        format.json
	        format.pdf { render template: 'stadistics/report', pdf:'Reporte'}
	    end
	end
	
	def get_data
        send_data generate_stadistics,
              filename: "Estadisticas.pdf",
              type: "application/pdf"
    end
	
	private
	
	def generate_stadistics
        Prawn::Document.new do
            font("Courier-Bold", :size => 25)
            text "Estadisticas", align: :center
            font("Courier", :size => 14)
            text "Numero total de eventos: #{Event.total_size}"
            text "Eventos publicos: #{Event.publics}"
            text "Eventos privados: #{Event.privates}"
            text "Numero total de usuarios: #{User.total_size}"
            text "Mujeres registradas: #{User.total_women}"
            text "Hombres registrados: #{User.total_men}"
            text "Porcentaje de mujeres: #{(User.total_women*100)/User.total_size} %"
            text "Porcentaje de hombres: #{(User.total_men*100)/User.total_size} %"
            text "Categorias:"
            Category.all.each do |categ|
                text "#{categ.id} - #{categ.name}"
            end
        end.render
    end
end