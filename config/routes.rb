Rails.application.routes.draw do
  
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :songs
    resources :dictionaries
    resources :materials
    resources :curriculums
    resources :books do 
      collection { post :import }
    end
    resources :erinarpets
    resources :posters
    resources :games
    
    resources :users, only: :update
  end
  
  #Do not place any routes below this one
  get '*other', to: 'static#index'
end 
