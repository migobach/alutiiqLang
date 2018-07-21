require 'csv'

namespace :dictionary do
  task database: :environment do
    csv_text = File.read(Rails.root.join('lib', 'seeds', 'dictionary.csv'))
    puts csv_text
    csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
    csv.each do |row|
      d = Dictionary.new
      d.english = row['english']
      d.part_of_speech = row['part_of_speech']
      d.alutiiq_north = row['alutiiq_north']
      d.north_audio = row['north_audio']
      d.north_sentence = row['north_sentence']
      d.alutiiq_south = row['alutiiq_south']
      d.south_audio = row['south_audio']
      d.south_sentence = row['south_sentence']
      d.image_name = row['image_name']
      d.root_word = row['root_word']
      d.category = row['category']
      d.edited_by = row['edited_by']
      d.notes = row['notes']
      puts "#{d.english} saved"
    end

    puts "There are now #{Dictionary.count} rows in the dictionary table"
  end

end
