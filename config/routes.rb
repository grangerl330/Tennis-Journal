Rails.application.routes.draw do
  get '/api/get_current_user', to: 'api/sessions#get_current_user'
  post '/api/login', to: 'api/sessions#create'
  delete '/api/logout', to: 'api/sessions#destroy'

  namespace :api do
    resources :matches
    resources :tournaments
    resources :opponents
    resources :users
  end
end
