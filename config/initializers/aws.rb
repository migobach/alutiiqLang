Aws.config.update({
  region: ENV['AWS_REGION'],
  credentials: Aws::Credentials.new(ENV['AWS_ACCESS_KEY_ID'], ENV['AWS_SECRET_ACCESS_KEY'])
})

<<<<<<< HEAD
S3_BUCKET = Aws::S3::Client.new
=======
S3_BUCKET = Aws::S3::Resource.new.bucket(ENV['S3_BUCKET'])
>>>>>>> parent of 81fad8b... update bucket name
