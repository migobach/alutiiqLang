class Poster < ApplicationRecord

  def self.to_csv
    attributes = %w{
      title
      poster_link
      author
      notes
    }

    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.each do |poster|
        csv << poster.attributes.values_at(*attributes)
      end
    end
  end


  def self.import(file)
    Poster.delete_all

  #below is borrowed from the rake task

    file[:poster].each do |row| 
      e = Poster.new
      e.title = row['title']
      e.poster_link = row['poster_link']
      e.author = row['author']
      e.notes = row['notes']
      e.save
      puts "#{e.title} saved"
    end

    puts "There are now #{Poster.count} rows in the poster table"

  end
end
