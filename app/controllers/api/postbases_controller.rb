class Api::PostbasesController < ApplicationController
  before_action :set_postbase, only: [:show]
  before_action :postbase_params, only: [:import]

  def index
    render json: Postbase.all
  end

  def export
    @postbaseData = Postbase.all

    respond_to do |format|
      format.json
      format.csv { send_data @postbaseData.to_csv }
    end
  end

  def show
    render json: @postbase
  end

  def create
    postbase = Postbase.create(postbase_params)

    if postbase.save
      render json: postbase
    else
      render json: { errors: postbase.errors.full_mesage.join(',')}
    end
  end

  def import
    Postbase.import(postbase_params)
  end

  private

  def set_postbase
    @postbase = Postbase.find(params[:id])
  end

  def postbase_params
    params.permit( postbase: [
     :translation,
     :postbase_1,
     :example_1,
     :example_1_translation,
     :postbase_2,
     :example_2,
     :example_2_translation,
     :postbase_3,
     :example_3,
     :example_3_translation,
     :complexity_ranking ,
     :clean_postbase_1,
     :clean_postbase_2,
     :notes

      # :postbase,
      # :translation,
      # :example_1,
      # :example_1_translation,
      # :example_2,
      # :example_2_translation,
      # :example_3,
      # :example_3_translation,
      # :clean_postbase_1,
      # :clean_postbase_2
    ])
  end
end
