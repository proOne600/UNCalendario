# Preview all emails at http://localhost:3000/rails/mailers/event_mailer
class EventMailerPreview < ActionMailer::Preview
    
    def created_event
        @event=Event.first
        @user=User.first
        EventMailer.created_event(@event,@user )
    end

end
