class User::RegistrationsController < ApplicationController
  before_action :forbid_login_user!

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.image = "default_user.jpg"
    if @user.save
      redirect_to "/mypage"
    else
      render action: :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
