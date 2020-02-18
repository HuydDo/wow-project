require 'faker'
require 'pry'

class Api::V1::CharactersController < ApplicationController
  def index
    characters = Character.all
    render json: characters
  end

  def show
    character = Character.find(params[:id])
    # render json: {id: character.id, player: character.player}
    if character
      # render json: character, include: [:player]

      render json: character.to_json(:include => {
        :player => {:only => [:name]}
        
      }, :except => [:created_at, :updated_at])
    else
      render json: {message: 'No character found with that id'}
    end
  end
  
  def create 
    # binding.pry
    # player = Player.find(params[:player_id])
    # character = player.characters.create(character_params)
    # character = Character.find(params[:player_id])
    character = Character.create(character_params)
    render json: character
  end
  
  # def update
  #   @character = Character.find(params[:id])
  #   @character.udpate(character_params)
  #   render json: @character
  
  # def destroy
  #   @character = Character.find(params[:id])
  #   @character.delete
  #   render json: {characterId: character.id}
  # end


  private
  def character_params
    params.require(:character).permit(:gender, :name, :race, :character_class, :player_id)
  end
end
