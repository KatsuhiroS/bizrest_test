Rails.application.routes.draw do
  root 'apps#top'

  get '/mypage', to: 'mypage#index'
  get '/mypage/edit', to: 'mypage#edit'

  resources :subjects, only: [:index]
  get 'subjects/:slug', to: 'subjects#show'

  get "signin" => "user/sessions#new"
  delete "signout" => "user/sessions#destroy"
  get "signup" => "user/registrations#new"
  namespace :user do
    resources :registrations, only: :create
    resources :sessions, only: :create
  end

  namespace :api, { format: :json } do
    resources :subjects, only: [:index], param: :slug do
      resources :lessons, only: [:index], controller: 'subjects/lessons'
    end
  end

  # NOTE: 最後に置かないとバグになる可能性があります
  get '/:slug/study/:order', to: 'apps#accounting_study'
end
