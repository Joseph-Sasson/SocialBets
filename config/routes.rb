Rails.application.routes.draw do
  
  resources :messages
  resources :messengers
  resources :betslips
  resources :bets
  resources :users

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  patch "/deposit/:id", to: "users#deposit"
  patch "/withdraw/:id", to: "users#withdraw"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
