Rails.application.routes.draw do
  resources :phrases, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :create, :show, :destroy]

  get "relogin", to: "users#relogin"
  get "login", to: "users#login"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
