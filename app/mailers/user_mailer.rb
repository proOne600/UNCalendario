class UserMailer < ApplicationMailer
    default from: 'uncalendarionotifier@gmail.com'
    
    def welcome_email(user)
        @user=user
        @url='unal.edu.co'
        mail(to: @user.email, subject: 'Bienvenido a UNCalendario')
    end
end
