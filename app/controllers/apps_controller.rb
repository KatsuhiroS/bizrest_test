class AppsController < ApplicationController
  before_action :authenticate_user!, only: [:mypage, :subjects, :accounting_study]
  before_action :forbid_login_user!, only: [:top]

  def top
  end

  def mypage
  end

  def subjects
  end

  def accounting_study
  end
end
