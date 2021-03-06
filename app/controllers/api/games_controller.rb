class Api::GamesController < ApplicationController
  before_action :set_games, only: [:show]
  before_action :game_params, only: [:import]

  def index
    render json: Game.all
  end

  def export 
    @gameData = Game.all

    respond_to do |format|
      format.json
      format.csv { send_data @gameData.to_csv }
    end
  end

  def show
    render json: @game
  end

  def create
    game = Game.create(game_params)
    
    if game.save
      render json: game
    else
      render json: { errors: game.errors.full_mesage.join(',')}
    end
  end

  def update
    if @game.update(game_params)
      render json: @game
    else
      render json: { errors: game.errors.full_message.join(',')}
    end
  end

  def import 
    Game.import(game_params)
  end

    private

    def set_games
      @game = Game.find(params[:id])
    end

    def game_params
      params.permit(game: [
        :game_name_alutiiq,
        :game_name_english,
        :link_to_item,
        :game_group,
        :notes,
        :order,
        :creator
      ])
    end
end
