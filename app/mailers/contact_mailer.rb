class ContactMailer < ApplicationMailer
    
    
    def 
        contact_send(params) @parameters=params mail(to:@parameters[:email],subject:@parameters[:subject]) 
    end
end
