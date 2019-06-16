class Api::LessonsController < Api::ApplicationController
  def index
    lessons = Subject.find_by!(slug: params[:slug]).lessons

    render json: lessons.map{ |lesson|
      {
        id: lesson.id,
        name: lesson.name,
      }
    }
  end

  def show
    subject = Subject.find_by(slug: params[:slug])
    lesson = subject.lessons.find_by(order: params[:lesson_order])
    chapter = lesson.chapters.find_by(order: params[:chapter_order])
    slides = chapter.slides
    instruction = chapter.instruction

    render json: {slides: slides, instruction: instruction}
  end
end

