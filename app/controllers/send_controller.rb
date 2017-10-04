class SendController < ApplicationController
  def index
  end
  
  def create 
   flash[:notice]= “formulario enviado”
   redirect_to send_path
  end

end
