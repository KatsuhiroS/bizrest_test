class Subject < ApplicationRecord
  has_many :lessons

  validates :title, presence: true
  validates :explanation, presence: true
  validates :order, presence: true
end
