class EventMailer < ApplicationMailer
    default from: 'uncalendarionotifier@gmail.com'
    
    def created_event(event,user)
        @user= user
        @event=event
        @url='https://un-calendario.herokuapp.com/'
        mail(to: @user.email, subject: '¡Nuevo evento creado por ti!')
    end
end
