Rails.application.routes.draw do
  resources :listings
  resources :users
  resources :photos

  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'

  post '/listings', to: 'listings#create'
  patch '/listings', to: 'listings#edit'
  delete '/listings', to: 'listings#destroy'

  patch '/users', to: 'users#edit'

end
