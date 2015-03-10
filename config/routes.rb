Rails.application.routes.draw do
  root 'contacts#new'
  resources :contacts, only: [:new, :create]
end
