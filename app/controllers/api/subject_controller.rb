class Api::SubjectController < Api::ApplicationController
  def index
    @subjects = Subject.all

    #@subject = Subject.first

    render json: @subjects.map{ |subject|
      {
        id: subject.id,
        title: subject.title,
        slug: subject.slug
      }
    }

  end
end
