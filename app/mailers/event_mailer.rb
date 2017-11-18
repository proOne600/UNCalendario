class EventMailer < ApplicationMailer
    default from: 'uncalendarionotifier@gmail.com'
    
    def created_event(event,user)
        @user= user
        @event=event
        @url='https://un-calendario.herokuapp.com/'
        mail(to: @user.email, subject: '¡Nuevo evento creado por ti!')
    end
    
    def shared_event(event,user_mail)
        @user_m= user_mail
        @user_o= current_user
        @event=event
        @url='https://un-calendario.herokuapp.com/'
        mail(to: @user_m, subject: '¡Has sido invitado a un evento!')
    end
end
