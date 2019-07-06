class AnswerSpace < ApplicationRecord
  belongs_to :answer_column
  has_one :chapter, through: :answer_column
end
