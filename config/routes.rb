Rails.application.routes.draw do

  resources :roles
  resources :assignments
  resources :user_profiles, only: [:show, :edit]
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
  resources :events do
    resources :reviews
    match "/share", :to => "events#send_event",:via =>  [:get, :post] , :as => "share"
  end

  get 'sessions/create'

  get 'sessions/destroy'

  #get 'events/:id/asistir' => 'events#asistir'
  ## Ruta para creacion de PDF
  #get 'events/:id/get_pdf' => 'events#get_pdf'
  #post 'events/:id' => 'events#sender_event'

  #######################
  #get 'events/:id/grade' => 'events#grade'
  post 'events/:id' => 'events#grade'

  #get 'events/:id/noasistire' => 'events#noasistire'
  post 'events/:id' => 'events#noasistire'


  #Link al calendario
  #match 'events/' => 'events#viewCalendar', :defaults => { :id => 'about' }
  #get '/events' => 'events#viewCalendar',as: 'horario'


  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks" }
  
  root to: 'events#index'
  get '/contact' => 'home#contact'
  get '/stadistics' =>'stadistics#show'
  get '/stadistics/generate' => 'stadistics#get_data'
  get '/events' => 'events#gen_documents', as: 'docs'
  
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #get ‘send’ => ‘send#index’
  #post ‘send’ => ‘send#create’

end