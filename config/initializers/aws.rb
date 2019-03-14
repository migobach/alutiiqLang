Aws.config.update({
  region: 'us-west-2',
  credentials: Aws::Credentials.new(ENV['AWS_ACCESS_KEY_ID'], ENV['AWS_SECRET_ACCESS_KEY']),
  key = OpenSSL::PKey::RSA.new(1024)
  s3 = Aws::S3::Encryption::Client.new(encryption_key: key, region: "us-west-2")
})
