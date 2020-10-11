Rails.application.routes.draw do
  resources :listings
  resources :users

  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'

end
