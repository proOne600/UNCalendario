Rails.application.routes.draw do

  resources :categories
  resources :event_locations
  resources :event_tags
  resources :events
  devise_for :users
  get 'sessions/create'

  get 'sessions/destroy'

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  root to: "home#index"
  get '/contact' => 'home#contact'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end