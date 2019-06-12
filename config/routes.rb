Rails.application.routes.draw do
  namespace :api do
    resources :matches
  end
end
