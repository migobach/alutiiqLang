class Api::SongsController < ApplicationController
  before_action :set_song, only: [:show]

  def index
    render json: Song.all
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

    private

    def set_song
      @song = Song.find(params[:id])
    end

    def song_params
      params.require(:song).permit(:title_english, :title_alutiiq, :credit, :audio, :video, :script, :traditional)
    end
end
