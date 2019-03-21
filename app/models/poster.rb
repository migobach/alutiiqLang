class Poster < ApplicationRecord

  def self.import(file)
    Poster.delete_all

  #below is borrowed from the rake task

    file[:poster].each do |row| 
      e = Poster.new
      e.title = row['title']
      e.poster_link = 
        if row['poster_link'] == ""
          row['poster_link']
        else
          "https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/poster/" + row['poster_link'].gsub(' ', '+') + ".pdf"
        end
      e.author = row['author']
      e.notes = row['notes']
      e.save
      puts "#{e.title} saved"
    end

    puts "There are now #{Poster.count} rows in the poster table"

  end
end
