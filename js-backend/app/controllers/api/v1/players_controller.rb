class Api::V1::PlayersController < ApplicationController
 
  def index
   players = Player.all
  #  render json: players, include: [:characters]
   render json: players.to_json(include: [:characters])
  end 

  def show
    player = Player.find_by(name: params[:name])
    # render json: player
    # render json: {name: player.name}
    # render json: player, include: [:characters]

    if player
      # render json: sighting.to_json(include: [:bird, :location])
      render json: player.to_json(:include => {
      :characters => {:only => [:gender, :name, :race, :character_class, :player_id]}
      }, :except => [:created_at, :updated_at])
    else
      render json: { message: 'No player found with that id' }
    end
  end
end
