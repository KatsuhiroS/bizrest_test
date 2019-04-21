Rails.application.routes.draw do
  root 'apps#top'

  get '/mypage', to: 'mypage#index'
  get '/mypage/edit', to: 'mypage#edit'

  #get '/subjects/accounting', to: 'apps#accounting'
  get '/accounting/study', to: 'apps#accounting_study'

  resources :subjects, only: [:index], param: :slug do
    resources :lessons, only: [:index], controller: 'subjects/lessons'
  end

  get "signin" => "user/sessions#new"
  delete "signout" => "user/sessions#destroy"
  get "signup" => "user/registrations#new"
  namespace :user do
    resources :registrations, only: :create
    resources :sessions, only: :create
  end

  namespace :api, { format: :json } do
    resources :subjects
  end
end
