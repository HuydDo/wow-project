class Api::V1::PlayersController < ApplicationController
 
  def index
   players = Player.all
  #  render json: players, include: [:characters]
   render json: players.to_json(include: [:characters])
  end 

  def show
    player = Player.find_by(id: params[:id])
    # render json: player
    # render json: {name: player.name}
    render json: player, include: [:characters]
  end
end
