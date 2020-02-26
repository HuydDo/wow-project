require 'faker'

class Api::V1::CharactersController < ApplicationController
  def index
    characters = Character.all
    render json: characters.to_json(include: [:player]), status: 200
  end

  def show
    character = Character.find(params[:id])
    # render json: {id: character.id, player: character.player}
    if character
      # render json: character, include: [:player]
      render json: character.to_json(:include => {
        :player => {:only => [:name, :id]}
        
      }, :except => [:created_at, :updated_at])
    else
      render json: {message: 'No character found with that id'}
    end
  end
  
  def create 
    # player = Player.find(params[:player_id])
    player = Player.find_by(name: params[:character][:player_id])
    character = player.characters.create(character_params)
    # character = Character.find(params[:player_id])
    # character = Character.create(character_params)
    render json: character
  end
  
  # def update
  #   @character = Character.find(params[:id])
  #   @character.udpate(character_params)
  #   render json: @character
  
  def destroy
    character = Character.find(params[:id])
    character.delete
    # render json: {characterId: character.id}
    render json: character, status: 200
  end

  private
  def character_params
    params.require(:character).permit(:gender, :name, :race, :character_class, :player_id)
  end
end
