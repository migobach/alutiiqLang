require 'csv'

namespace :material do
  task database: :environment do
    csv_text = File.read(Rails.root.join('lib', 'seeds', 'material.csv'))
    puts csv_text
    csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
    puts csv
    
    csv.each do |row|
      # puts row.to_hash
      m = Material.new
      m.resource_title = row['resource_title']
      m.file_url =
        if row['file_url'] == nil 
          row['file_url']
        else (
          if row['file_url'].include? 'http'
            row['file_url']
          else
            "http://alutiiqeducation.org/files/resource_pdf/" + row['file_url']
          end
        )
        end 
      m.url = row['url']
      m.author = row['author']
      m.year = row['year']
      m.grade = row['grade']
      m.standards = row['standards']
      m.subjects = row['subjects']
      m.values = row['values']
      m.sponsors = row['sponsors']
      m.keywords = row['keywords']
      m.notes = row['notes']
      m.save
      puts "#{m.resource_title} saved"
    end

    puts "There are now #{Material.count} rows in the materials table"
  end

end


