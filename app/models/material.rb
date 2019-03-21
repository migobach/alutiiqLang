class Material < ApplicationRecord

  def self.to_csv
    attributes = %w{resource_title file_url url author year grade standards subjects values sponsors keywords notes}
   
    binding.pry
    CSV.generate(headers: true) do |csv|
      csv << attributes
      
      all.each do |material|
        # binding.pry
        csv << material.attributes.values_at(*attributes)
      end
    end
  end


  def self.import(file)
    Material.delete_all

    #below is borrowed from the rake file
    file[:material].each do |row|
      # puts row.to_hash
      m = Material.new
      m.resource_title = row['resource_title']
      m.file_url =
        if row['file_url'] == "" 
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
