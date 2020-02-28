Rails.application.routes.draw do

  # resources :characters
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :characters
      resources :players
      # resources :players, only: [:index, :show, :create]
      post 'players/login', to: 'players#login'
      # get '/players' => 'players#index'
    end
  end
end