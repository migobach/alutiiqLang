Rails.application.routes.draw do
  
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :songs do 
      collection { post :import }
      collection { get :export }
    end
    resources :dictionaries do 
      collection { post :import }
      collection { get :export }
    end
    resources :materials do
      collection { post :import }
      collection { get :export }
    end
    resources :curriculums do
      collection { post :import }
      collection { get :export }
    end
    resources :books do 
      collection { post :import }
      collection { get :export }
    end
    resources :erinarpets do
      collection { post :import }
      collection { get :export }
    end
    resources :posters do 
      collection { post :import }
      collection { get :export }
    end
    resources :games do 
      collection { post :import }
      collection { get :export }
    end
    
    resources :users, only: :update
  end
  
  #Do not place any routes below this one
  get '*other', to: 'static#index'
end 
