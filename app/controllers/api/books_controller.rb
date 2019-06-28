
require 'aws-sdk-s3' 

class Api::BooksController < ApplicationController
  before_action :set_book, only: [:show]
  before_action :book_params, only: [:import, :create]
  before_action :set_s3_direct_post, only: [:create]

  def index
    render json: Book.all
  end

  def create
    s3 = Aws::S3::Resource.new(region:'us-west-2')
    per = params.permit(book: [:path])
    path = per[:book]
    name = path[:path]
    obj = s3.bucket('alutiiq-language-resources').object(name)
    obj.put(body: per, acl: 'public-read')
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
      params.permit(book: [:book_title_alutiiq, :book_title_english, :description, :image, :file, :audio, :book_type, :creator, files: []])
    end

    def set_s3_direct_post
      @s3_direct_post = S3_BUCKET.presigned_post(key: "book_pdf/#{SecureRandom.uuid}/${filename}", success_action_status: '201', acl: 'public-read')
    end

end
