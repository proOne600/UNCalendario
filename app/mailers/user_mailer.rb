class UserMailer < ApplicationMailer
    default from: 'uncalendarionotifier@gmail.com'
    
    def welcome_email(user)
        @user=user
        @url='https://un-calendario.herokuapp.com/'
        mail(to: @user.email, subject: 'Bienvenido a UNCalendario')
    end
end
