class Api::MaterialsController < ApplicationController
  before_action :set_material, only: [:show]
  
  def index
    render json: Material.all
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

    private 

    def set_material
      @material = Material.find(params[:id])
    end

    def material_params
      params.require(:material).permit(:resource_title, :file_url, :url, :author, :year, :grade, :standards, :subjects, :values, :sponsors, :keywords, :notes)
    end

end
