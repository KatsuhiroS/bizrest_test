class Chapter < ApplicationRecord
  belongs_to :lesson
  has_many :slides
  has_one :instruction
  has_many :answer_columns
  has_many :answer_spaces, through: :answer_columns
  has_many :answer_choices
end
