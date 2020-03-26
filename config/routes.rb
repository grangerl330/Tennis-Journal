Rails.application.routes.draw do
  get '/api/get_current_user', to: 'api/sessions#get_current_user'
  post '/api/authenticate_password', to: 'api/sessions#authenticate_password'
  post '/api/login', to: 'api/sessions#create'
  delete '/api/logout', to: 'api/sessions#destroy'

  post '/api/signup', to: 'api/users#create'
  patch '/api/users/update_password', to: 'api/users#update_password'

  namespace :api do
    resources :matches
    resources :tournaments
    resources :opponents
    resources :users
    resources :rankings
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
