class Chapter < ApplicationRecord
  belongs_to :lesson
  has_many :slides
  has_one :instruction
end
