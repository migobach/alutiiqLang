class Api::ItemsController < ApplicationController

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


  private

    def set_item
      @item = Item.find(params[:id])
    end

    def item_params 
      params.permit(item: [
        :title,
        :body,
        :buttonUrl,
        :buttonName,
        :visible
      ])
    end
end
