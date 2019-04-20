require 'aws-sdk-s3' 

class Api::BooksController < ApplicationController
  before_action :set_book, only: [:show]
  before_action :book_params, only: [:import, :create]
  before_action :set_s3_direct_post, only: [:create]

  def index
    render json: Book.all
  end

  # def create
  #   # Make an object in your bucket for your upload
  #   # obj = S3_BUCKET.objects[params[:file].original_filename]
  #   obj = S3_BUCKET.objects(upload_params)
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
    # Make an object in your bucket for your upload 
    # s3 = Aws::S3::Resource.new(region: 'us-west-2')
    
    # per = params.permit(book: [:path])
    # object = per[:book]
    # file = object[:path] 
    # bucket = 'alutiiq-language-resources'
    
    # binding.pry
          
    # # Get just the file name
    # name = File.basename(file)
    # binding.pry
    # # Create the object to upload
    # obj = s3.bucket(bucket).object(name)
    # binding.pry
    # # Metadata to add
    # metadata = {'original_filename' => '${filename}'}
    # binding.pry
    # # Upload it      
    # obj.upload_file(file, metadata: metadata)


    # need to get the upload params in here somehow to make it permitted

#below is from Reece from Slack

s3 = Aws::S3::Resource.new(region:'us-west-2')
per = params.permit(book: [:path])
# per = params.permit(book: [:acceptedFiles])
path = per[:book]
name = path[:path]
obj = s3.bucket('alutiiq-language-resources').object(name)
binding.pry

# obj.put(body: book_params[:attachment]) #> this is the step that actually stores the file data. 
obj.put(body: per, acl: 'public-read')
binding.pry


##### BELOW PUTS SOMETHING THE FILE NAME, NO FILE ON AWS

# s3 = Aws::S3::Resource.new(region:'us-west-2')
# per = params.permit(book: [:path])
# path = per[:book]
# name = path[:path]
# binding.pry
# obj = s3.bucket('alutiiq-language-resources').object(name)

# # Replace BucketName with the name of your bucket.
# # Replace KeyName with the name of the object you are creating or replacing.

# url = URI.parse(obj.presigned_url(:put))

# body = "Hello World!"
# # This is the contents of your object. In this case, it's a simple string.
# binding.pry
# Net::HTTP.start(url.host) do |http|
#   http.send_request("PUT", url.request_uri, body, {
# # This is required, or Net::HTTP will add a default unsigned content-type.
#     "content-type" => "",
#   })
# end

# puts obj.get.body.read

### END THE EMPTY PUT ON AWS

    # s3 = Aws::S3::Resource.new
    # per = params.permit(book: [:path])
    # obj = per[:book]
    # filename = '/Users/michaelback/Desktop/' + obj[:path] #this is the actualy path where the file is located
    # binding.pry
    # @post = s3.bucket(ENV.fetch('S3_BUCKET')).presigned_post(
    #   key: "alutiiq-language-resources/${filename}",
    #   allow_any: ['utf8', 'authenticity_token'],
    #   acl: "public-read",
    # )
    # binding.pry
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
      params.permit(book: [:book_title_alutiiq, :book_title_english, :description, :image, :file, :audio, :book_type, :creator, files: []])
    end

    def set_s3_direct_post
      @s3_direct_post = S3_BUCKET.presigned_post(key: "book_pdf/#{SecureRandom.uuid}/${filename}", success_action_status: '201', acl: 'public-read')
    end

end
