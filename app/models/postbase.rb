class Postbase < ApplicationRecord

  def self.to_csv
    attributes = %w{
      postbase
      translation
      example1
      example1translation
      example2
      example2translation
      example3
      example3translation
    }

    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.each do |postbase|
        csv << postbase.attributes.values_at(*attributes)
      end
    end
  end

  def self.import(file)
     Postbase.delete_all
     file[:postbase].each do |row|
      p = Postbase.new
      p.postbase = row['postbase']
      p.translation = row['translation']
      p.example1 = row['example_1']
      p.example1translation = row['example_1_translation']
      p.example2 = row['example_2']
      p.example2translation = row['example_2_translation']
      p.example3 = row['example_3']
      p.example3translation = row['example_3_translation']
      p.save
    end
    puts "There are now #{Postbase.count} in the database?"
  end
end

# postbase,
# translation,
# example_1,
# example_1_translation,
# example_2,
# example_2_translation,
# example_3,
# example_3_translation,
# clean_postbase_1,
# clean_postbase_2
