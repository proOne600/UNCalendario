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
    	if params[:param1] == 'day'
    		@events= Event.days
    		@total_events=Event.days.total_size
    		@users= User.days
    		@total_users= User.days.total_size
	    	@women=User.days.total_women
	    	@men=User.days.total_men
	    	@categorias=Category.all
	    	@num_privates=Event.days.privates
	    	@num_publics=Event.days.publics
	    	respond_to do |format|
	       		format.html
	       		format.json
	       		format.pdf { render template: 'stadistics/report', pdf:'Reporte'}
	    	end
    	elsif params[:param1] == 'week'
    		@events= Event.weeks
    		@total_events = Event.weeks.total_size
    		@users= User.weeks
	    	@total_users= User.weeks.total_size
	    	@women=User.weeks.total_women
	    	@men=User.weeks.total_men
	    	@categorias=Category.all
	    	@num_privates=Event.weeks.privates
	    	@num_publics=Event.weeks.publics
	    	respond_to do |format|
	       		format.html
	       		format.json
	       		format.pdf { render template: 'stadistics/report', pdf:'Reporte'}
	    	end
    	elsif params[:param1] == 'month'
    		@events= Event.monts
    		@total_events = Event.monts.total_size
    		@users= User.monts
	    	@total_users= User.monts.total_size
	    	@women=User.monts.total_women
	    	@men=User.monts.total_men
	    	@categorias=Category.all
	    	@num_privates=Event.monts.privates
	    	@num_publics=Event.monts.publics
	    	respond_to do |format|
	       		format.html
	       		format.json
	       		format.pdf { render template: 'stadistics/report', pdf:'Reporte'}
	    	end
    	elsif params[:param1] == 'year'
    		@events= Event.year
    		@total_events = Event.year.total_size
    		@users=User.year
	    	@total_users= User.year.total_size
	    	@women=User.year.total_women
	    	@men=User.year.total_men
	    	@categorias=Category.all
	    	@num_privates=Event.year.privates
	    	@num_publics=Event.year.publics
	    	respond_to do |format|
	       		format.html
	       		format.json
	       		format.pdf { render template: 'stadistics/report', pdf:'Reporte'}
	    	end
	    ########################## Inicio filtro entrada #######################
	    # elsif params[:param1] == 'filter'
    	# 	@events= Event.search_date(:started,:finished)
    	# 	@events_Date= params[:started]
    	# 	@events_end= params[:finished]
    	# 	@total_events = @events.total_size
    	# 	@users=User.year
	    # 	@total_users= User.year.total_size
	    # 	@women=User.year.total_women
	    # 	@men=User.year.total_men
	    # 	@categorias=Category.all
	    # 	@num_privates=@events.privates
	    # 	@num_publics=@events.publics
	    # 	respond_to do |format|
	    #   		format.html
	    #   		format.json
	    #   		format.pdf { render template: 'stadistics/report', pdf:'Reporte'}
	    # 	end
	    #################################### fin filtro entrada ####################
	    else
    		@events=Event.all
	    	@total_events = Event.total_size
	    	@users=User.all
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