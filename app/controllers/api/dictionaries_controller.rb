class Api::DictionariesController < ApplicationController
  before_action :set_dictionary, only: [:show]
  before_action :set_page
  
  def index
    dictionaries = Dictionary.page(@page)
    total_pages = dictionaries.total_pages
    render json: { dictionaries: dictionaries, total_pages: total_pages}
  end

  def show
    render json: @dictionary
  end

  def create
    dictionary = Dictionary.create(dictionary_params)

    if dictionary.save
      render json: dictionary
    else
      render json: { errors: dictionary.errors.full_message.join(',')}
    end
  end

  def update
    if @dictionary.update(dictionary_params)
      render json: @dictionary
    else
      render json: { errors: dictionary.errors.full_message.join(',')}
    end
  end

    private 

    def set_page
      @page = params[:page] || 1
    end

    def set_dictionary
      @dictionary = Dictionary.find(params[:id])
    end

    def dictionary_params
      params.require(:dictionary).permit(
        :english, 
        :part_of_speech, 
        :alutiiq_north, 
        :north_audio, 
        :north_sentence, 
        :alutiiq_south, 
        :south_audio, 
        :south_sentence, 
        :image_name, 
        :root_word, 
        :category, 
        :edited_by, 
        :notes, 
        :completed, 
        :approved
        )
    end

end
