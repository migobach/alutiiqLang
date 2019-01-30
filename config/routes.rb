Rails.application.routes.draw do
  

  namespace :api do
    resources :songs
    resources :dictionaries
    resources :materials
    resources :curriculums
    resources :books
    resources :erinarpets
    resources :posters
    resources :games
    
    resources :users, only: :update
  end
  
  #Do not place any routes below this one
  get '*other', to: 'static#index'
end 
