class EventCalificationsController < ApplicationController
  before_action :set_event_calification, only: [:show, :edit, :update, :destroy]

  # GET /event_califications
  # GET /event_califications.json
  def index
    @event_califications = EventCalification.all
  end

  # GET /event_califications/1
  # GET /event_califications/1.json
  def show
  end

  # GET /event_califications/new
  def new
    @event_calification = EventCalification.new
  end

  # GET /event_califications/1/edit
  def edit
  end

  # POST /event_califications
  # POST /event_califications.json
  def create
    @event_calification = EventCalification.new(event_calification_params)

    respond_to do |format|
      if @event_calification.save
        format.html { redirect_to @event_calification, notice: 'Event calification was successfully created.' }
        format.json { render :show, status: :created, location: @event_calification }
      else
        format.html { render :new }
        format.json { render json: @event_calification.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /event_califications/1
  # PATCH/PUT /event_califications/1.json
  def update
    respond_to do |format|
      if @event_calification.update(event_calification_params)
        format.html { redirect_to @event_calification, notice: 'Event calification was successfully updated.' }
        format.json { render :show, status: :ok, location: @event_calification }
      else
        format.html { render :edit }
        format.json { render json: @event_calification.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /event_califications/1
  # DELETE /event_califications/1.json
  def destroy
    @event_calification.destroy
    respond_to do |format|
      format.html { redirect_to event_califications_url, notice: 'Event calification was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event_calification
      @event_calification = EventCalification.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_calification_params
      params.require(:event_calification).permit(:event_id, :user_id, :calification)
    end
end
