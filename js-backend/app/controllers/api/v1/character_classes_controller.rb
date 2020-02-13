class Api::V1::CharacterClassesController < ApplicationController
  def index
    @character_classes = CharacterClass.all
    render json: @character_classes
  end
end
