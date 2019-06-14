Rails.application.routes.draw do
  namespace :api do
    resources :matches
    resources :tournaments
    resources :opponents
    resources :users
  end
end
