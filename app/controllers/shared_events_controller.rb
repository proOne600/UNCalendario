class SharedEventsController < ApplicationController
  before_action :set_shared_event, only: [:show, :edit, :update, :destroy]

  # GET /shared_events
  # GET /shared_events.json
  def index
    @shared_events = SharedEvent.all
  end

  # GET /shared_events/1
  # GET /shared_events/1.json
  def show
  end

  # GET /shared_events/new
  def new
    @shared_event = SharedEvent.new
  end

  # GET /shared_events/1/edit
  def edit
  end

  # POST /shared_events
  # POST /shared_events.json
  def create
    @shared_event = SharedEvent.new(shared_event_params)

    respond_to do |format|
      if @shared_event.save
        format.html { redirect_to @shared_event, notice: 'Shared event was successfully created.' }
        format.json { render :show, status: :created, location: @shared_event }
      else
        format.html { render :new }
        format.json { render json: @shared_event.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /shared_events/1
  # PATCH/PUT /shared_events/1.json
  def update
    respond_to do |format|
      if @shared_event.update(shared_event_params)
        format.html { redirect_to @shared_event, notice: 'Shared event was successfully updated.' }
        format.json { render :show, status: :ok, location: @shared_event }
      else
        format.html { render :edit }
        format.json { render json: @shared_event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /shared_events/1
  # DELETE /shared_events/1.json
  def destroy
    @shared_event.destroy
    respond_to do |format|
      format.html { redirect_to shared_events_url, notice: 'Shared event was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shared_event
      @shared_event = SharedEvent.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def shared_event_params
      params.require(:shared_event).permit(:event_id, :user_id, :social_network)
    end
end
