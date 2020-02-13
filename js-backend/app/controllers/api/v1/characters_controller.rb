require 'faker'

class Api::V1::CharactersController < ApplicationController
  def index
    @characters = Character.all
    render json: @characters
  end

  def show
    @character = Character.find(params[:id])
    render json: @character
  end
  
  def create 
    @character = Character.create(character_params)
    render json: @character, status: 200 
  end
  
  def update
    @character = Character.find(params[:id])
    @character.udpate(character_params)
    render json: @character, status: 200 
  end
  
  def destroy
    @character = Character.find(params[:id])
    @character.delete
    render json: {characterId: character.id}
  end


  private
  def character_params
    params.require(:character).permit(:gender, :name, :class, :race)
  end
end
