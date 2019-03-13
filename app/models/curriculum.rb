class Curriculum < ApplicationRecord

  def self.import(file)
    Curriculum.delete_all
  
    #below is borrowed from the curriculum rake file

    file[:curriculum].each do |row| 
      c = Curriculum.new
      c.curricular_name = row['curricular_name']
      c.link_to_item = 
        if row['link_to_item'] == ""
          row['link_to_item']
        elsif row['link_to_item'].include? 'http'
          row['link_to_item']
        else
          "https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/curriculum/" + row['link_to_item']
        end
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
