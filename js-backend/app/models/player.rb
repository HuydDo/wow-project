class Player < ApplicationRecord
  has_many :characters
  validates :name, uniqueness: :true
  # validates :name, presence: true
end
