class Api::EditablesController < ApplicationController
  before_action :set_editable, only: [:show, :update]
  # before_action :editables_params, only: [:import]

  def index
    render json: Editable.all
  end

  def show
    render json: @editable
  end

  def create
    editable = Editable.create(editable_params)

    if editable.save
      render json: editable
    else
      render json: { errors: editable.errors.full_message.join(',')}
    end
  end

  def update
    if @editable.update(editable_params)
      render json: @editable
    else
      render json: { errors: editable.errors.full_message.join(',')}
    end
  end

    private

    def set_editable
      @editable = Editable.find(params[:id])
    end

    def editable_params
      # params.permit(:editable [:name, :modifyDate, :textShort, :textLong, :imageUrl, :available])
      params.require(:editable).permit(:name, :modifyDate, :textShort, :textLong, :imageUrl, :available)
    end
end
