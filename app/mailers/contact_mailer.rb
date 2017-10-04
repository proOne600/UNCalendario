class ContactMailer < ApplicationMailer
<<<<<<< HEAD
    default from: “UNCalendario <contacto@UNCalendario.co>”
=======
    
>>>>>>> DavidRico
    
    def 
        contact_send(params) @parameters=params mail(to:@parameters[:email],subject:@parameters[:subject]) 
    end
end
