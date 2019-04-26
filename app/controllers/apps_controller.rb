class AppsController < ApplicationController
  before_action :forbid_login_user!, only: [:top]

  def top
  end
end
