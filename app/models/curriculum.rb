class Curriculum < ApplicationRecord

  def self.to_csv
    attributes = %w{
      curricular_name
      link_to_item
      level
      lesson_number
      notes
      group_name
      order
    }

    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.each do |curriculum|
        csv << curriculum.attributes.values_at(*attributes)
      end
    end
  end


  def self.import(file)
    Curriculum.delete_all
  
    #below is borrowed from the curriculum rake file

    file[:curriculum].each do |row| 
      c = Curriculum.new
      c.curricular_name = row['curricular_name']
      c.link_to_item = row['link_to_item']
        # if row['link_to_item'] == ""
        #   row['link_to_item']
        # elsif row['link_to_item'].include? 'http'
        #   row['link_to_item']
        # else
        #   "https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/curriculum/" + row['link_to_item']
        # end
      c.level = row['level']
      c.lesson_number = row['lesson_number']
      c.notes = row['notes']
      c.group_name = row['group_name']
      c.order = row['order']
      c.save
      puts "#{c.curricular_name} saved"
    end

    puts "There are now #{Curriculum.count} rows in the curriculum table"
  end
end
