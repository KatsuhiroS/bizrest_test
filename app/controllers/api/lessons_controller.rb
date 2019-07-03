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
    answer_columns = chapter.answer_columns.as_json(include: [:answer_spaces])
    answer_choices = chapter.answer_choices

    render json: {
      slides: slides,
      instruction: instruction,
      answer_columns: answer_columns,
      answer_choices: answer_choices,
    }
  end
end

