require 'csv'

@littler = "\u0280"

namespace :dictionary do
  task database: :environment do
    csv_text = File.read(Rails.root.join('lib', 'seeds', 'dictionary.csv'))
    puts csv_text
    csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
    
    csv.each do |row|
      d = Dictionary.new
      d.english = row['english']
      d.part_of_speech = row['part_of_speech']
      d.alutiiq_north = 
        if row['alutiiq_north'] == nil
          row['alutiiq_north']
        else (
          if row['alutiiq_north'].include? '_'
            (
              if row['alutiiq_north'].index('_') == 0 
                row['alutiiq_north'].gsub(/_/, 'R')
              else
                row['alutiiq_north'].gsub!(/_/, '_' => @littler.encode('utf-8') )
              end
            )
          else
            row['alutiiq_north']
          end
        )
        end
      d.north_audio = 
        if row['north_audio'] == nil
          row['north_audio']
        else
          "https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/dictionary_audio/" + row['north_audio'] 
        end
      d.north_sentence = row['north_sentence']
      d.alutiiq_south =
        if row['alutiiq_south'] == nil
          row['alutiiq_south']
        else (
          if row['alutiiq_south'].include? '_'
            (
              if row['alutiiq_south'].index('_') == 0 
                row['alutiiq_south'].gsub(/_/, 'R')
              else
                row['alutiiq_south'].gsub!(/_/, '_' => @littler.encode('utf-8') )
              end
            )
          else
            row['alutiiq_south']
          end
        )
        end
      d.south_audio =
        if row['south_audio'] == nil
          row['south_audio']
        else
          "https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/dictionary_audio/" + row['south_audio'] 
        end
      d.south_sentence = row['south_sentence']
      d.image_name = row['image_name']
      d.root_word = row['root_word']
      d.category = row['category']
      d.edited_by = row['edited_by']
      d.notes = row['notes']
      d.completed =
        if row['completed'] == 'TRUE'
          row['completed'] = true
        elsif row['completed'] == ''
          row['completed'] = false
        else row['completed'] == 'FALSE'
          row['completed'] = false
        end
      d.approved = 
        if row['approved'] == 'TRUE'
          row['approved'] = true
        elsif row['approved'] == ''
          row['approved'] = false
        else row['approved'] == 'FALSE'
          row['approved'] = false
        end
      d.save
      puts "#{d.english} saved"
    end

    puts "There are now #{Dictionary.count} rows in the dictionary table"
  end

end
