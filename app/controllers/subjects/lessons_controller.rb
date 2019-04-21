class Subjects::LessonsController < ApplicationController
  def index
    lessons = Subject.find_by!(slug: params[:subject_slug]).lessons
  end
end
