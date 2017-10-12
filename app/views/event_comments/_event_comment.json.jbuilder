json.extract! event_comment, :id, :event_id, :user_id, :comment, :created_at, :updated_at
json.url event_comment_url(event_comment, format: :json)
