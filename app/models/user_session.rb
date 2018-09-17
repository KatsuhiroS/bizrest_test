class UserSession < Authlogic::Session::Base
  secure Rails.env.production?
  httponly true
end
