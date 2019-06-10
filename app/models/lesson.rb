class Lesson < ApplicationRecord
  belongs_to :subject
  has_many :chapters
end
