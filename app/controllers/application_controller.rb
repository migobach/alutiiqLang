class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

  include ActionController::MimeResponds #added in order to have respond_to method for exporting csv
end
