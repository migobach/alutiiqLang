class Api::BooksController < ApplicationController
  before_action :set_book, only: [:show]
  before_action :book_params, only: [:import, :create]
  # before_action :set_s3_direct_post, only: [:create]

  def index
    render json: Book.all
  end

  # def create
  #   # Make an object in your bucket for your upload
  #   # obj = S3_BUCKET_NAME.objects[params[:file].original_filename]
  #   obj = S3_BUCKET_NAME.objects(upload_params)
  #   binding.pry
  #   # Upload the file
  #   obj.write(
  #     file: params[:book],
  #     acl: :public_read
  #   )
  #   binding.pry

  #   # Create an object for the upload
  #   @upload = Book.new(
  #       file: obj.public_url
  #       #add other data bits here to make it a full form
  #   )

  #   # Save the upload
  #   if @upload.save
  #     redirect_to uploads_path, success: 'File successfully uploaded'
  #   else
  #     flash.now[:notice] = 'There was an error'
  #     render :new
  #   end
  # end
  

  
  def create
    # We are getting base64 from the React site and need to strip away any prefix before the data we want, 
    # we are using regex to find multiple file types and slicing it out of the file string.

    regex = /\Adata:([-\w]+\/[-\w\+\.]+)?;base64,/m

    name = params[:book][:path]
    file = params[:book][:file]
    fileType = file.match(regex)
    file.slice! fileType[0]

    # Upload to S3 using a AWS S3 Client object that is initialized in config/initializers/aws.rb.
    # We are decoding the base64 on the fly.

    obj = S3_BUCKET.put_object({
      acl: "public-read",
      body: Base64.decode64(file.to_s),
      bucket: ENV['S3_BUCKET'],
      key: name,
    })

    # Save "book" with url to database, this needs to be changed to match what you need for books.
    book = Book.new(
      file: "https://s3.amazonaws.com/#{ENV['S3_BUCKET']}/#{name}",
      image: name
    )

  #   # Save the upload
  #   if @upload.save
  #     redirect_to uploads_path, success: 'File successfully uploaded'
  #   else
  #     flash.now[:notice] = 'There was an error'
  #     render :new
  #   end
  # end
  

  # I THINK THIS IS SHOULD MAYBE WORK
  # def create
  #   # We are getting base64 from the React site and need to strip away any prefix before the data we want, 
  #   # we are using regex to find multiple file types and slicing it out of the file string.

  #   regex = /\Adata:([-\w]+\/[-\w\+\.]+)?;base64,/m

  #   name = params[:book][:path]
  #   file = params[:book][:file]
  #   fileType = file.match(regex)
  #   file.slice! fileType[0]

  #   # Upload to S3 using a AWS S3 Client object that is initialized in config/initializers/aws.rb.
  #   # We are decoding the base64 on the fly.

  #   obj = S3_BUCKET.put_object({
  #     acl: "public-read",
  #     body: Base64.decode64(file.to_s),
  #     bucket: ENV['S3__NAME'],
  #     key: name,
  #   })

  #   # Save "book" with url to database, this needs to be changed to match what you need for books.
  #   book = Book.new(
  #     file: "https://s3.amazonaws.com/#{ENV['S3_BUCKET']}/#{name}",
  #     image: name
  #   )

  #   if book.save
  #     render json: book
  #   else
  #     render json: { errors: book.errors.full_message.join(',')}
  #   end
  # end


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

    # def set_s3_direct_post
    #   @s3_direct_post = S3_BUCKET.presigned_post(key: "book_pdf/#{SecureRandom.uuid}/${filename}", success_action_status: '201', acl: 'public-read')
    # end

end
