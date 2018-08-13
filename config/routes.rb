Rails.application.routes.draw do
  get '/', to: 'apps#top'
  get '/mypage', to: 'apps#mypage'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
