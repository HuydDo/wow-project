class Character < ApplicationRecord
  belongs_to :player
  validates :name, uniqueness: :true
  # validates :name, presence: true
end
