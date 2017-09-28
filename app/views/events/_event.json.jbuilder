json.extract! event, :id, :name, :description, :published, :cancelled, :id_user, :event_date, :event_init_hour, :event_end_hour, :even_end_date, :calification, :all_calification, :created_at, :updated_at
json.url event_url(event, format: :json)
