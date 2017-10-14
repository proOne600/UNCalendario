json.extract! shared_event, :id, :event_id, :user_id, :social_network, :created_at, :updated_at
json.url shared_event_url(shared_event, format: :json)
