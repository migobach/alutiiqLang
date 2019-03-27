class Api::BooksController < ApplicationController
  before_action :set_book, only: [:show]
  before_action :book_params, only: [:import]
  before_action :upload_params, only: [:create]

  def index
    render json: Book.all
  end

  def create
    # Make an object in your bucket for your upload
    binding.pry
    s3 = Aws::S3::Resource.new
    @post = s3.bucket(ENV.fetch('S3_BUCKET')).presigned_post(
      key: "book_pdf/${filename}",
      allow_any: ['utf8', 'authenticity_token'],
      acl: "public-read",
    )
    binding.pry
    #hitting here fine, but uploading an object with no content 204 no content returned
  end

  def export 
    @bookData = Book.all

    respond_to do |format|
      format.json
      format.csv { send_data @bookData.to_csv }
    end
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
    Book.import(book_params)
  end

  private

    def set_book
      @book = Book.find(params[:id])  
    end

    def book_params
      params.permit(book: [:book_title_alutiiq, :book_title_english, :description, :image, :file, :audio, :book_type, :creator])
    end

    def upload_params
      params.permit(book: [:file, :book, :path])
      binding.pry
    end

end
