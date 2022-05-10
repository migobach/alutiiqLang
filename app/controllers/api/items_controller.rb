class Api::ItemsController < ApplicationController
  before_action :item_params, only: [ :create ]
  before_action :set_item, only: [ :destroy ]

  def index
    render json: Item.all
  end

  def show
    render json: @item
  end

  def create
    item = Item.create(item_params)

    if item.save
      render json: item
    else
      render json: { errors: item.errors.full_message.join(',')}
    end
  end

  def destroy
    @item.destroy
  end


  private

    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      params.require(:item).permit(
        :title,
        :body,
        :buttonUrl,
        :buttonName,
        :visible,
        :page,
        :location,
        :contact
      )
    end
end
