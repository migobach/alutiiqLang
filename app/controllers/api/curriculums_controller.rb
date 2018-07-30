class Api::CurriculumsController < ApplicationController
  before_action :set_curriculum, only: [:show]

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

    private

    def set_curriculum
      @curriculum = Curriculum.find(params[:id])
    end

    def curriculum_params
      params.require(:curriculum).permit(:curricular_name, :linke_to_item, :level, :lesson_number, :notes)
    end

end
