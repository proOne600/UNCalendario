class EventDocumentsController < ApplicationController
  before_action :set_event_document, only: [:show, :edit, :update, :destroy]

  # GET /event_documents
  # GET /event_documents.json
  def index
    @event_documents = EventDocument.all
  end

  # GET /event_documents/1
  # GET /event_documents/1.json
  def show
  end

  # GET /event_documents/new
  def new
    @event_document = EventDocument.new
  end

  # GET /event_documents/1/edit
  def edit
  end

  # POST /event_documents
  # POST /event_documents.json
  def create
    @event_document = EventDocument.new(event_document_params)

    respond_to do |format|
      if @event_document.save
        format.html { redirect_to @event_document, notice: 'Event document was successfully created.' }
        format.json { render :show, status: :created, location: @event_document }
      else
        format.html { render :new }
        format.json { render json: @event_document.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /event_documents/1
  # PATCH/PUT /event_documents/1.json
  def update
    respond_to do |format|
      if @event_document.update(event_document_params)
        format.html { redirect_to @event_document, notice: 'Event document was successfully updated.' }
        format.json { render :show, status: :ok, location: @event_document }
      else
        format.html { render :edit }
        format.json { render json: @event_document.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /event_documents/1
  # DELETE /event_documents/1.json
  def destroy
    @event_document.destroy
    respond_to do |format|
      format.html { redirect_to event_documents_url, notice: 'Event document was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event_document
      @event_document = EventDocument.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_document_params
      params.require(:event_document).permit(:event_id, :user_id, :name, :file)
    end
end
