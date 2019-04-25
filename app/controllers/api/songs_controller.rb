class Api::SongsController < ApplicationController
  before_action :set_song, only: [:show]
  before_action :song_params, only: [:import]

  def index
    render json: Song.all
  end

  def export 
    @songData = Song.all

    respond_to do |format|
      format.json
      format.csv { send_data @songData.to_csv }
    end
  end

  def show
    render json: @song
  end

  def create
    song = Song.create(song_params)

    if song.save
      render json: song
    else
      render json: { errors: song.errors.full_message.join(',')}
    end
  end

  def update
    if @song.update(song_params)
      render json: @song
    else
      render json: { errors: song.errors.full_message.join(',')}
    end
  end

  def import 
    Song.import(song_params)
  end

    private

    def set_song
      @song = Song.find(params[:id])
    end

    def song_params
      params.permit(song: [:title_english, :title_alutiiq, :credit, :audio, :video, :script, :traditional, :script_english_words, :script_alutiiq_words, :notes])
    end
end
