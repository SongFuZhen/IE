Rails.application.routes.draw do
  resources :create_projects
  resources :users
  resources :homes

  root :to=> "homes#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
