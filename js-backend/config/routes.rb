Rails.application.routes.draw do
  resources :character_classes
  resources :races
  # resources :characters
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :characters
      resources :players
    end
  end
end