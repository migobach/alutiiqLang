require 'csv'

namespace :curriculum do
  task database: :environment do
    csv_text = File.read(Rails.root.join('lib', 'seeds', 'curriculum.csv'))
    csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
    csv.each do |row| 
      
      puts row.to_hash
      c = Curriculum.new
      c.curricular_name = row['curricular_name']
      c.link_to_item = 
        if row['link_to_item'] == nil
          row['link_to_item']
        else
          # binding.pry
          "https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/" + row['link_to_item']
        end
      c.level = row['level']
      c.lesson_number = row['lesson_number']
      c.notes = row['notes']
      c.save
      puts "#{c.curricular_name} saved"
    end

    puts "There are now #{Curriculum.count} rows in the curriculum table"
  end

end
