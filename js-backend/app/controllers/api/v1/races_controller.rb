class Api::V1::RacesController < ApplicationController
  def index
    @races = Race.all
    render json: @races
  end
end
