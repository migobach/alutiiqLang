class Api::ItemsController < ApplicationController
  before_action :item_params, only: [ :create ]

  def index
    render json: Item.all
  end

  def show
    render json: @item
  end

  def create
    item = Item.create(item_params)
    binding.pry

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

    # def item_params 
    #   params.permit(item: [
    #     :title,
    #     :body,
    #     :buttonUrl,
    #     :buttonName,
    #     :visible
    #   ])
    # end

    def item_params
      binding.pry
      params.require(:item).permit(
        :title,
        :body,
        :buttonUrl,
        :buttonName,
        :visible)
    end
end
