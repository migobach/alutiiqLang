class Book < ApplicationRecord

  require 'smarter_csv'


  def self.import(file)

    # at this point I have my file as a hash, I need to translate that hash to a csv
    # Can this help? https://stackoverflow.com/questions/8183706/how-to-save-a-hash-into-a-csv

    binding.pry

    SmarterCSV.process(file) do |chunk|
      chunk.each do |data_hash|
        Book.create!(data_hash)
      end
    end

    # Do the below to get the csv string and then pass it to the block below this one (Maybe?)
    # csv_string = CSV.generate({:col_sep => "\t"}) do |csv|
    #   csv << b1
    # end

    # do the below block once I have the csv file
    # CSV.foreach(headers: true) do |row|
    #   Book.create! row.to_hash 
  #   end
  end
end


