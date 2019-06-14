Rails.application.routes.draw do
  get '/api/login', to: 'sessions#create'

  namespace :api do
    resources :matches
    resources :tournaments
    resources :opponents
    resources :users
  end
end
