Rails.application.routes.draw do
  
  resources :bank_transactions, only: [:index, :create]
  resources :betslips, only: [:index, :create]
  resources :bets, only: [:index]
  resources :users
  # resources :messages
  # resources :messengers
  # resources :bank_histories, only: [:index, :create]

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  patch "/deposit/:id", to: "users#deposit"
  patch "/withdraw/:id", to: "users#withdraw"
  post '/settle', to: "bets#settle"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
