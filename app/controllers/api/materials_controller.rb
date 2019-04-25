class Api::MaterialsController < ApplicationController
  before_action :set_material, only: [:show]
  before_action :material_params, only: [:import]
  
  def index
    render json: Material.all
  end
  
  def export 
    @materialdata = Material.all
  
    respond_to do |format|
      format.json 
      format.csv { send_data @materialdata.to_csv }
    end
  end

  def show
    render json: @material
  end

  def create
    material = Material.create(material_params)

    if material.save
      render json: material
    else 
      render json: { errors: material.errors.full_message.join(',')}
    end
  end

  def update
    if @material.update(material_params)
      render json: @material 
    else
      render json: { errors: material.errors.full_message.join(',')}
    end
  end

  def import 
    Material.import(material_params)
  end

    private 

    def set_material
      @material = Material.find(params[:id])
    end

    def material_params
      params.permit(material: [:resource_title, :file_url, :url, :author, :year, :grade, :standards, :subjects, :values, :sponsors, :keywords, :notes])
    end

end
