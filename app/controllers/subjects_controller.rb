class SubjectsController < ApplicationController
  def index
    @subjects = Subject.all
  end

  def show
  end
end
