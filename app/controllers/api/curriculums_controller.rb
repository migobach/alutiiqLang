class Api::CurriculumsController < ApplicationController
  before_action :set_curriculum, only: [:show]
  before_action :curriculum_params, only: [:import]

  def index
    render json: Curriculum.all
  end

  def show
    render json: @curriculum
  end

  def create
    curriculum = Curriculum.create(curriculum_params)

    if curriculum.save
      render json: curriculum
    else
      render json: { errors: curriculum.errors.full_message.join(',')}
    end
  end
 
  def update
    if @curriculum.update(curriculum_params)
      render json: @curriculum
    else
      render json: { errors: curriculum.errors.full_message.join(',')}
    end
  end

  def import
    Curriculum.import(curriculum_params)
  end

    private

    def set_curriculum
      @curriculum = Curriculum.find(params[:id])
    end

    def curriculum_params
      params.permit(curriculum: [:curricular_name, :link_to_item, :level, :lesson_number, :notes, :group_name, :order])
    end

end
