class Api::ErinarpetsController < ApplicationController
  before_action :set_erinarpets, only: [:show]
  before_action :erinarpet_params, only: [:import]

  def index
    render json: Erinarpet.all
  end

  def show
    render json: @erinarpet
  end

  def create
    erinarpet = Erinarpet.create(erinarpet_params)

    if erinarpet.save
      render json: erinarpet
    else
      render json: { errors: erinarpet.errors.full_message.join(',')}
    end 
  end
 
  def update
    if @erinarpet.update(erinarpet_params)
      render json: @erinarpet
    else
      render json: { errors: erinarpet.errors.full_message.join(',')}
    end
  end

  def import 
    Erinarpet.import(erinarpet_params)
  end

    private 

    def set_erinarpets
      @erinarpet = Erinarpet.find(params[:id])
    end

    def erinarpet_params
      params.permit(article: [
        :print_date,
        :topic,
        :author, 
        :article_pdf,
        :image,
        :notes
      ])
    end

end
