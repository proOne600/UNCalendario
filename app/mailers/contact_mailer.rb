class ContactMailer < ApplicationMailer
    default from: “UNCalendario <contacto@UNCalendario.co>”
    
    def 
        contact_send(params) @parameters=params mail(to:@parameters[:email],subject:@parameters[:subject]) 
    end
end
