class Character < ApplicationRecord
  belongs_to :player
  has_many :races
  has_many :character_classes
end
