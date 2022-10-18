Rails.application.routes.draw do

  # Albums:
  resources :albums, only: [:index, :create]
  get "/users/:user_id/albums", to: 'albums#user_albums'

  # User:
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Reviews:
  resources :reviews, only: [:index, :create, :update, :destroy]




  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
