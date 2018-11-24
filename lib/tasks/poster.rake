require 'csv'

namespace :poster do
  task database: :environment do
    csv_text = File.read(Rails.root.join('lib', 'seeds', 'poster.csv'))
    csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
    csv.each do |row| 
      e = Poster.new
      e.title = row['title']
      e.poster_link = 
        if row['poster_link'] == nil
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
