class EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy, :get_pdf]
  before_action :confirm_user, only: [:update, :destroy]
  before_action :authenticate_user!, only: [:destroy, :new]

  helper_method :asset_exist?


  # GET /events
  # GET /events.json
  def index
    @categories = Category.all
    @events = Event.search(params[:term], params[:category], params)

    if params[:param1] == 'months'
      render 'index_calendar'
    else
      @size = Event.total_size
      render 'index'
    end
  end

  def view_calendar
    @events = Event.all
  end


  #Verificar usuario y su id
  def verID
    if (user_signed_in?)
    end
  end

  # GET /events/1
  # GET /events/1.json
  def show
    if params[:destinos]
      sendero_event
    else
      if @event.reviews.blank?
        @average_review = 0
      else
        @average_review = @event.reviews.average(:rating).round(2)
      end
      @suggestions = Event.where('event_date > ?', Date.today).where('category_id = ?', @event.category.id).order('event_date ASC').limit(4) #model

      respond_to do |format|
        format.html
        format.json
        format.pdf {render template: 'events/event', pdf: @event.name}
      end
    end
  end

  # GET /events/new
  def new
    @event = Event.new
    @categories = Category.all.map {|c| [c.name, c.id]}
  end

  # GET /events/1/edit
  def edit
    @categories = Category.all.map {|c| [c.name, c.id]}

  end

  # def allowed_params
  #   params.require(:event).permit(:id_user, :calification, :all_calification)
  # end


  # POST /events
  # POST /events.json
  def create
    @event = Event.new(event_params)
    @categories = Category.all.map {|c| [c.name, c.id]}
    @event.user= current_user
    @event.category_id= params[:event][:category_id]
    ######################


    respond_to do |format|
      if @event.save
        EventMailer.delay.created_event(@event, @event.user)
        format.html {redirect_to @event, notice: 'Event was successfully created.'}
        format.json {render :show, status: :created, location: @event}
      else
        format.html {render :new}
        format.json {render json: @event.errors, status: :unprocessable_entity}
      end
    end
  end

  def send_event
    @event = Event.find(params[:event_id])
    if params[:destinos]
      @dest= params[:destinos].split(',')

      @dest.each do |mail|
        EventMailer.delay.shared_event(@event, mail, current_user)
      end
      redirect_to @event, notice: 'Event was successfully shared.'
    else
      render 'sender_event'
    end

  end

  def get_pdf
    send_data generate_pdf(@event),
              filename: "#{@event.name}.pdf",
              type: 'application/pdf'
  end

  def get_events
    send_data gen_documents(@events),
              filename: 'Eventos.pdf',
              type: 'application/pdf'
  end


  #end


  # PATCH/PUT /events/1
  # PATCH/PUT /events/1.json
  def update
    respond_to do |format|
      if @event.update(event_params)
        format.html {redirect_to @event, notice: 'Event was successfully updated.'}
        format.json {render :show, status: :ok, location: @event}
      else
        format.html {render :edit}
        format.json {render json: @event.errors, status: :unprocessable_entity}
      end
    end
  end

  def grade(grad)
    cal[current_user]=grad
  end

  @asis=Array.new

  def asistir
    @asis.push(current_user.id.to_s)
  end

  def noasistire
    @asis.delete(current_user.id.to_s)
  end

  def dentro?
    @asis.include?(current_user.id.to_s)
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event.destroy
    respond_to do |format|
      format.html {redirect_to events_url, notice: 'Event was successfully destroyed.'}
      format.json {head :no_content}
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_event
    @event = Event.find(params[:id])
  end

  def asset_exist?(path)
    if Rails.configuration.assets.compile
      Rails.application.precompiled_assets.include? path
    else
      Rails.application.assets_manifest.assets[path].present?
    end
  end

  def generate_pdf(event)
    Prawn::Document.new do
      text event.name, align: :center
      text "Descripcion: #{event.description}"
      text "Categoria: #{Category.find(event.category_id).name}"
      if event.event_date.present?
        text "Fecha inicio: #{event.event_date.to_formatted_s(:short)}"
      end
      if event.even_end_date.present?
        text "Fecha final: #{event.even_end_date.to_formatted_s(:short)}"
      end
    end.render
  end

  def gen_documents(eventos)
    Prawn::Document.new do
      eventos.each do |event|
        text event.name, align: :center
        text "Descripcion: #{event.description}"
        text "Categoria: #{Category.find(event.category_id).name}"
        if event.event_date.present?
          text "Fecha inicio: #{event.event_date.to_formatted_s(:short)}"
        end
        if event.even_end_date.present?
          text "Fecha final: #{event.even_end_date.to_formatted_s(:short)}"
        end
      end
    end.render
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def event_params
    params.require(:event).permit(:name, :description, :published, :cancelled, :event_date, :event_init_hour, :event_end_hour, :even_end_date, :category_id, :address, :image, :image_cache, :term)
  end

  def confirm_user
    if @event.user!=current_user
      redirect_to events_path
      flash[:error] = "No esta autorizado para realizar esta accion"

    end

  end


#cal = {}

#def required_login
#  unless logged_in?
#    flash[:error] = "Necesita iniciar sesion para realizar esta accion"
#    redirect_to new_user_session_path
#  end
#end

end
