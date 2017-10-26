class ReviewsController < ApplicationController
  before_action :find_event

  def new
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    @review.event = @event
    @review.user = current_user

    if @review.save
      redirect_to event_path(@event)
    else
      render 'new'
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :comment)
  end

  def find_event
    @event = Event.find(params[:event_id])
  end
end
