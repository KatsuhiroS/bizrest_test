class Api::AnswerSpacesController < Api::ApplicationController
  def update
    answer_space = AnswerSpace.find(params[:id])
    answer_space.update(user_answer: params[:lastDroppedItemName])
    render json: {answer_space: answer_space}
  end
end

