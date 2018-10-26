class Api::BooksController < ApplicationController
  before_action :set_book, only: [:show]

  def index
    render json: Book.all
  end

  def show
    render json: @book
  end

  def create
    book = Book.create(book_params)

    if book.save
      render json: book
    else
      render json: { errors: book.errors.full_message.join(',')}
    end
  end

  def update
    if @book.update(book_params)
      render json: @book
    else 
      render json: { errors: book.errors.full_message.join(',')}
    end 
  end

    private

    def set_book
      @book = Book.find(params[:id])  
    end

    def book_params
      params.reqire(:book).permit(:book_title_alutiiq, :book_title_english, :description, :image, :file, :audio, :book_type)
    end

end
