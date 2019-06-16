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
    answer_choices = chapter.answer_choices

    render json: {
      slides: slides,
      instruction: instruction,
      answer_choices: answer_choices,
    }
  end
end

