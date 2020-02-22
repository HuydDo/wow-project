class Player < ApplicationRecord
  has_many :characters
  validates :name, presence: true
end
