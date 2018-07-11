Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :drinks, only: [:index, :create, :show] 
    resources :stores, only: [:create, :index, :show]
  end
end
