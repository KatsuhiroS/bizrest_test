Rails.application.routes.draw do
  get '/', to: 'apps#top'
  get '/mypage', to: 'apps#mypage'
  get '/subjects', to: 'apps#subjects'
  get '/mypage/edit', to: 'apps#mypage_edit'
  get '/subjects/accounting', to: 'apps#accounting'
  get '/accounting/study', to: 'apps#accounting_study'

  get "sign_in" => "user/sessions#new"
  delete "sign_out" => "user/sessions#destroy"
  namespace :user do
    resources :registrations, only: [:new, :create]
    resources :sessions, only: :create
  end
end
