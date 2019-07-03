class AnswerColumn < ApplicationRecord
  belongs_to :chapter
  has_many :answer_spaces
end
