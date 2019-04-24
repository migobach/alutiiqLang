Aws.config.update({
  region: ENV['AWS_REGION'],
  credentials: Aws::Credentials.new(ENV['AWS_ACCESS_KEY_ID'], ENV['AWS_SECRET_ACCESS_KEY'])
})

<<<<<<< HEAD
S3_BUCKET = Aws::S3::Resource.new.bucket(ENV['S3_BUCKET'])

=======
S3_BUCKET_NAME = Aws::S3::Resource.new.bucket(ENV['S3_BUCKET_NAME'])
>>>>>>> working
