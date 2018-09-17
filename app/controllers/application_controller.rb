class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user_session, :current_user

  private

  def current_user_session
    return @current_user_session if defined?(@current_user_session)
    @current_user_session = UserSession.find
  end

  def current_user
    return @current_user if defined?(@current_user)
    @current_user = current_user_session && current_user_session.user
  end

  # ログイン必須controllerのbefore_actionで呼ぶ
  def require_login
    return redirect_to sign_in_path unless current_user
  end
end
