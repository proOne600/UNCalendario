json.extract! event, :id, :description
json.start event.event_date
json.end event.event_end_hour
json.title event.name
json.url event_url(event, format: :html)