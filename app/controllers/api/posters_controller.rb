class Api::PostersController < ApplicationController
  before_action :set_poster, only: [:show]
  before_action :poster_params, only: [:import]

  def index
    render json: Poster.all
  end

  def show
    render json: @poster
  end

  def create
    poster = Poster.create(poster_params)

    if poster.save
      render json: poster
    else
      render json: { errors: poster.errors.full_message.join(',')}
    end
  end

  def update
    if @poster.update(poster_params)
      render json: @poster
    else
      render json: { errors: poster.errors.full_message.join(',')}
    end
  end

  def import 
    Poster.import(poster_params)
  end


    private

    def set_poster
      @poster = Poster.find(params[:id])
    end

    def poster_params
      params.permit(poster: [:title, :poster_link, :author, :notes])
    end
end
