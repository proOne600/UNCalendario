Rails.application.routes.draw do

  resources :roles
  resources :assignments
  resources :user_profiles
  resources :shared_events
  resources :event_comments
  resources :event_documents
  resources :favorite_events
  resources :event_califications
  get 'send/index'

  #resources :events do
  #  resources :event_comments, only: [:create]
  #end


  resources :categories
  resources :event_locations
  resources :event_tags
  resources :events
  get 'sessions/create'

  get 'sessions/destroy'

  #get 'events/:id/asistir' => 'events#asistir'
  post 'events/:id/asistir' => 'events#asistir'
  ## Ruta para creacion de PDF
  #get 'events/:id/get_pdf' => 'events#get_pdf'
  post 'events/:id' => 'events#get_pdf'
  #######################
  #get 'events/:id/grade' => 'events#grade'
  post 'events/:id' => 'events#grade'

  #get 'events/:id/noasistire' => 'events#noasistire'
  post 'events/:id' => 'events#noasistire'
  
  #Link al calendario
  #get 'events/' => 'events#viewCalendar' 


  devise_for :users, :controllers => {:omniauth_callbacks => 'users/omniauth_callbacks'}
  root to: 'events#index'
  get '/contact' => 'home#contact'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #get ‘send’ => ‘send#index’
  #post ‘send’ => ‘send#create’

end