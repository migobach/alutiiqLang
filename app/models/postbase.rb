class Postbase < ApplicationRecord

  def self.to_csv
    attributes = %w{
      translation
      postbase1
      example1
      example1translation
      postbase2
      example2
      example2translation
      postbase3
      example3
      example3translation
      complexityranking
      cleanpostbase1
      cleanpostbase2
      notes
    }

    # example1audio
    # example2audio
    # example3audio

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
      p.translation = row['translation']
      p.postbase1 = row['postbase_1']
      p.example1 = row['example_1']
      p.example1translation = row['example_1_translation']
      p.postbase2 = row['postbase_2']
      p.example2 = row['example_2']
      p.example2translation = row['example_2_translation']
      p.postbase3 = row['postbase_3']
      p.example3 = row['example_3']
      p.example3translation = row['example_3_translation']
      p.complexityranking = row['complexity_ranking ']
      p.cleanpostbase1 = row['clean_postbase_1']
      p.cleanpostbase2 = row['clean_postbase_2']
      p.notes = row['notes']
      p.save
    end
    puts "There are now #{Postbase.count} in the database?"
  end
end


# p.postbase = row['postbase']
# p.translation = row['translation']
# p.example1 = row['example_1']
# p.example1translation = row['example_1_translation']
# p.example2 = row['example_2']
# p.example2translation = row['example_2_translation']
# p.example3 = row['example_3']
# p.example3translation = row['example_3_translation']