class Api::V1::PlayersController < ApplicationController
  def index
     players = Player.all
      render json: players, include: [:characters]
    #  render json: players.to_json(include: [:characters])
  end 

  def login
    # player = Player.find_or_create_by(player_params)
    player = Player.find_by(player_params)
    if player  
      render json: player, status: 200
    else
      render json: {error: 'Can not login with username', status: 404}, status:404
    end  
  end

  def show
    player = Player.find_by(name: params[:id])
    # player = Player.find_by(player_params)
   
    if player
      # render json: player.to_json(include: [:characters])
      render json: player.to_json(:include => {
      :characters => {:only => [:id, :gender, :name, :race, :character_class, :player_id]}
      }, :except => [:created_at, :updated_at]), status: 200
    else
      render json: { message: 'No player found with that id'}
    end
  end
  
  def create
    # byebug
    # player = Player.create(player_params)
    player = Player.new(player_params)
    if player.save
     render json: player, status: 200
    else
      render json: {error: 'Fail to create player', status: 500}, status:500
    end
  end

  private
  def player_params
    params.require(:player).permit(:name)
  end
end
