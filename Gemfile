source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.0'
gem 'rails', '~> 5.2.0'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 3.11'
gem 'bootsnap', '>= 1.1.0', require: false
gem 'omniauth'
gem 'devise'
gem 'devise_token_auth'
gem 'kaminari'
gem 'dotenv-rails'
gem 'aws-sdk'
gem "aws-sdk-s3", require: false
# gem 'active_interaction', '~> 3.7' #for managing the CSV files in the controller
# gem 'smarter_csv', '~> 1.1', '>= 1.1.4' #may or may not need.... 


group :development, :test do
  gem 'pry'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end


# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
