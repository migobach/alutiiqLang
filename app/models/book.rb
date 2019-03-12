class Book < ApplicationRecord

  require 'smarter_csv'


  def self.import(file)

    # at this point I have my file as a hash, I need to translate that hash to a csv
    # Can this help? https://stackoverflow.com/questions/8183706/how-to-save-a-hash-into-a-csv

    binding.pry
    file[:book].each do |row|
      Book.create! row 
    end
  end
end


