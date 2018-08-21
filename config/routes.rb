Rails.application.routes.draw do
  get '/', to: 'apps#top'
  get '/mypage', to: 'apps#mypage'
  get '/subjects', to: 'apps#subjects'
  get '/mypage/edit', to: 'apps#mypage_edit'
  get '/subjects/accounting', to: 'apps#accounting'
  get '/accounting/study', to: 'apps#accounting_study'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
