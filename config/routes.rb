Rails.application.routes.draw do
  namespace :api do
    resources :songs
    resources :dictionaries
    resources :materials
  end
  
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
