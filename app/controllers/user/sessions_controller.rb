class User::SessionsController < ApplicationController
  before_action :forbid_login_user!, only: [:new, :create]

  def new
    @user_session = UserSession.new
  end

  def create
    @user_session = UserSession.new(user_session_params.to_h)
    if @user_session.save
      redirect_to "/mypage"
    else
      render :new
    end
  end

  def destroy
    current_user_session.destroy
    redirect_to "/"
  end

  private

  def user_session_params
    params.require(:user_session).permit(:email, :password)
  end
end
