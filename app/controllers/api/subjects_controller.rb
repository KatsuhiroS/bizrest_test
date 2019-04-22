class Api::SubjectsController < Api::ApplicationController
  def index
    @subjects = Subject.all

    render json: @subjects.map{ |subject|
      {
        id: subject.id,
        title: subject.title,
        slug: subject.slug
      }
    }

  end
end
