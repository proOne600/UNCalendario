json.extract! favorite_event, :id, :event_id, :user_id, :created_at, :updated_at
json.url favorite_event_url(favorite_event, format: :json)
