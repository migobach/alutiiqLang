Rails.application.routes.draw do
  
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :songs do 
      collection { post :import }
    end
    resources :dictionaries
    resources :materials do
      collection { post :import }
    end
    resources :curriculums do
      collection { post :import }
    end
    resources :books do 
      collection { post :import }
    end
    resources :erinarpets do
      collection { post :import }
    end
    resources :posters do 
      collection { post :import }
    end
    resources :games do 
      collection { post :import }
    end
    
    resources :users, only: :update
  end
  
  #Do not place any routes below this one
  get '*other', to: 'static#index'
end 
