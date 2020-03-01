class Api::V1::CharactersController < ApplicationController
  def index
    characters = Character.all
    render json: characters.to_json(include: [:player]), status: 200
  end

  def show
    character = Character.find(params[:id])
    if character
      render json: character.to_json(:include => {
        :player => {:only => [:name, :id]}
        
      }, :except => [:created_at, :updated_at])
    else
      render json: {message: 'No character found with that id'}
    end
  end
  
  def create 
    player = Player.find_by(name: params[:character][:player_id])
    # character = player.characters.create(character_params)
    # render json: character, status:200
    character = player.characters.build(character_params)
    if character.save
      render json: character, status:200
    else
      render json: {error: 'Fail to create character', status: 500}, status:500
    end
  end
  
  def destroy
    character = Character.find(params[:id])
    # character.delete
    if character
      character.delete
      render json: character, status: 200
    else
      render json: {error: 'Fail to delete character', status: 404}, status:404
    end
   end

  private
  def character_params
    params.require(:character).permit(:gender, :name, :race, :character_class, :player_id)
  end
end
