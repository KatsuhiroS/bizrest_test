class Chapter < ApplicationRecord
  belongs_to :lesson
  has_many :slides
end
