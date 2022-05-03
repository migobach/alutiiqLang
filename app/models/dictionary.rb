class Dictionary < ApplicationRecord

  @littler = "\u0280"

  def self.to_csv
    attributes = %w{
    english
    part_of_speech
    alutiiq_north
    north_audio
    north_sentence
    alutiiq_south
    south_audio
    south_sentence
    image_name
    root_word
    category
    edited_by
    notes
    completed
    approved
    synonyms
    literal_translation
    page
    edited_date
    cultural_significance
    examples_conjugation_irregulars
    negatives
    additional_meanings
    }

    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.each do |word|
        csv << word.attributes.values_at(*attributes)
      end
    end
  end

  def self.import(file)

    Dictionary.delete_all

    file[:dictionary].each do |row|

      d = Dictionary.new
      d.english = row['english']
      d.part_of_speech = row['part_of_speech']
      d.alutiiq_north =
        if row['alutiiq_north'] == ""
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
      d.north_audio = row['north_audio']
      d.north_sentence = row['north_sentence']
      d.alutiiq_south =
        if row['alutiiq_south'] == ""
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
      d.south_audio = row['south_audio']
      d.south_sentence = row['south_sentence']
      d.image_name = row['image_name']
      d.root_word = row['root_word']
      d.category = row['category']
      d.edited_by = row['edited_by']
      d.notes = row['notes']
      d.cultural_significance = row['cultural_significance']
      d.examples_conjugation_irregulars = row['examples_conjugation_irregulars']
      d.negatives = row['negatives']
      d.literal_translation = row['literal_translation']
      d.additional_meanings = row['additional_meanings']
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
