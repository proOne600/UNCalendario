class EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy, :get_pdf]
  before_action :confirm_user, only: [:update, :destroy]
  before_action :authenticate_user!, only: [:destroy, :new]


  # GET /events
  # GET /events.json
  def index
    @categories = Category.all
    if params[:category].blank?
      @events = Event.where('event_date > ?', Date.today).order('event_date ASC')
    else
      @category = Category.find_by_name(params[:category])
      @events = Event.where('event_date > ?', Date.today).where('category_id = ?', @category).order('event_date ASC')
    end

    if params[:param1] == 'months'
      render 'index_calendar'
    else
      @events = @events.paginate(:page => params[:page], :per_page => 30)
      @size = Event.total_size
      render 'index'
    end
  end

  def viewCalendar
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
    if @event.reviews.blank?
      @average_review = 0
    else
      @average_review = @event.reviews.average(:rating).round(2)
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
    ## Insercion de imagen
    @event.image= params[:file]
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

  def get_pdf
    send_data generate_pdf(@event),
              filename: "#{@event.name}.pdf",
              type: "application/pdf"
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

  # Never trust parameters from the scary internet, only allow the white list through.
  def event_params
    params.require(:event).permit(:name, :description, :published, :cancelled, :event_date, :event_init_hour, :event_end_hour, :even_end_date, :category_id)
    #params.require(:event).permit(:name, :description, :published, :cancelled, :id_user, :event_date, :event_init_hour, :event_end_hour, :even_end_date, :calification, :all_calification)
    #params.require(:event).permit(:name, :description, :published, :cancelled, :current_user_id, :event_date, :event_init_hour, :event_end_hour, :even_end_date, :calification, :all_calification)
    #params.require(:event).permit(:name, :description, :published, :cancelled, @users.id, :event_date, :event_init_hour, :event_end_hour, :even_end_date, :calification, :all_calification)
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
