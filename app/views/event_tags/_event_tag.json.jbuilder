json.extract! event_tag, :id, :event_id, :id_category, :name, :description, :created_at, :updated_at
json.url event_tag_url(event_tag, format: :json)
