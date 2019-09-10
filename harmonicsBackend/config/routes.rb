Rails.application.routes.draw do
  resources :phrases, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:create, :show, :update, :destroy]

  post "login", to: "authentication#login"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
