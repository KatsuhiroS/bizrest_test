Rails.application.routes.draw do
  root 'apps#top'

  get '/mypage', to: 'mypage#index'
  get '/mypage/edit', to: 'mypage#edit'

  get "signin" => "user/sessions#new"
  delete "signout" => "user/sessions#destroy"
  get "signup" => "user/registrations#new"

  namespace :user do
    resources :registrations, only: :create
    resources :sessions, only: :create
  end

  resources :subjects, only: [:index]
  get 'subjects/:slug', to: 'subjects#show'
  get '/:slug/study/:lesson_order/:chapter_order', to: 'lessons#show'

  namespace :api, { format: :json } do
    resources :subjects, only: [:index]
    get '/subjects/:slug', to: 'lessons#index'
    get '/:slug/study/:lesson_order/:chapter_order', to: 'lessons#show'

    resources :answer_spaces, only: [:update]
  end
end
