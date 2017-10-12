json.extract! event_document, :id, :event_id, :user_id, :name, :file, :created_at, :updated_at
json.url event_document_url(event_document, format: :json)
