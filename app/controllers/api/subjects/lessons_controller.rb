class Api::Subjects::LessonsController < Api::ApplicationController
  def index
    lessons = Subject.find_by!(slug: params[:subject_slug]).lessons

    render json: lessons.map{ |lesson|
      {
        id: lesson.id,
        name: lesson.name,
      }
    }
  end

end

