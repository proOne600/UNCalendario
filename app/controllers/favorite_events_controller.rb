class FavoriteEventsController < ApplicationController
  before_action :set_favorite_event, only: [:show, :edit, :update, :destroy]

  # GET /favorite_events
  # GET /favorite_events.json
  def index
    @favorite_events = FavoriteEvent.all
  end

  # GET /favorite_events/1
  # GET /favorite_events/1.json
  def show
  end

  # GET /favorite_events/new
  def new
    @favorite_event = FavoriteEvent.new
  end

  # GET /favorite_events/1/edit
  def edit
  end

  # POST /favorite_events
  # POST /favorite_events.json
  def create
    @favorite_event = FavoriteEvent.new(favorite_event_params)

    respond_to do |format|
      if @favorite_event.save
        format.html { redirect_to @favorite_event, notice: 'Favorite event was successfully created.' }
        format.json { render :show, status: :created, location: @favorite_event }
      else
        format.html { render :new }
        format.json { render json: @favorite_event.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /favorite_events/1
  # PATCH/PUT /favorite_events/1.json
  def update
    respond_to do |format|
      if @favorite_event.update(favorite_event_params)
        format.html { redirect_to @favorite_event, notice: 'Favorite event was successfully updated.' }
        format.json { render :show, status: :ok, location: @favorite_event }
      else
        format.html { render :edit }
        format.json { render json: @favorite_event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /favorite_events/1
  # DELETE /favorite_events/1.json
  def destroy
    @favorite_event.destroy
    respond_to do |format|
      format.html { redirect_to favorite_events_url, notice: 'Favorite event was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite_event
      @favorite_event = FavoriteEvent.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def favorite_event_params
      params.require(:favorite_event).permit(:event_id, :user_id)
    end
end
