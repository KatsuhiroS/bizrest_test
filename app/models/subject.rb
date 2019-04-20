class Subject < ApplicationRecord
  validates :title, presence: true
  validates :explanation, presence: true
  validates :order, presence: true
end
