class AppsController < ApplicationController
  before_action :authenticate_user!, only: [:accounting_study]
  before_action :forbid_login_user!, only: [:top]

  def top
  end

  def accounting_study
    # TODO: エラーハンドリングを追加する
    p "エラーハンドリングする" unless Subject.find_by(slug: params[:slug])
  end
end
