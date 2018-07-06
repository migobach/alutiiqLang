class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
	before_action :authenticate_user!, if: proc { request.controller_class.parent == Api }
end
