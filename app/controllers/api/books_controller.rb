class Api::BooksController < ApplicationController
  before_action :set_book, only: [:show]
  before_action :book_params, only: [:import]
 
  require 'csv'

  def index
    render json: Book.all
  end

  def show
    render json: @book
  end

  def update
    if @book.update(book_params)
      render json: @book
    else 
      render json: { errors: book.errors.full_message.join(',')}
    end 
  end

  def import 
    binding.pry
    Book.import(book_params) # was just params, and I had my object just fine, not permitted || also had it as book_params but book was empty
  end

    private

    def set_book
      @book = Book.find(params[:id])  
    end

    def book_params
      binding.pry
      params.require(:book).permit(:book_title_alutiiq, :book_title_english, :description, :image, :file, :audio, :book_type, :creator)
    end

end
