Rails.application.routes.draw do
  root 'apps#top'
  
  get '/mypage', to: 'apps#mypage'
  get '/mypage/edit', to: 'apps#mypage_edit'

  get '/subjects/accounting', to: 'apps#accounting'
  get '/accounting/study', to: 'apps#accounting_study'
  
  resources :subjects, only: [:index, :show]


  get "signin" => "user/sessions#new"
  delete "signout" => "user/sessions#destroy"
  get "signup" => "user/registrations#new"
  namespace :user do
    resources :registrations, only: :create
    resources :sessions, only: :create
  end
end
