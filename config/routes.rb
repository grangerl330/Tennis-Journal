Rails.application.routes.draw do
  post '/api/login', to: 'api/sessions#create'

  namespace :api do
    resources :matches
    resources :tournaments
    resources :opponents
    resources :users
  end
end
