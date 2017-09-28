json.extract! event_location, :id, :coordinates, :event_id, :name, :created_at, :updated_at
json.url event_location_url(event_location, format: :json)
