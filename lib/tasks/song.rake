require 'csv'

@littler = "\u0280"

namespace :song do
  task database: :environment do
    csv_text = File.read(Rails.root.join('lib', 'seeds', 'songaws.csv'))
    puts csv_text
    csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
    
    csv.each do |row|
      puts row.to_hash
      
      s = Song.new
      s.title_english = row['title_english']
      s.title_alutiiq = 
        if row['title_alutiiq'] == nil
          row['title_alutiiq']
        else (
          if row['title_alutiiq'].include? 'R'
            (
              if row['title_alutiiq'].index('R') == 0 
                row['title_alutiiq']
              else
                row['title_alutiiq'].gsub!('R', @littler.encode('utf-8') )
              end
            )
          else
            row['title_alutiiq']
          end
        )
        end
      s.credit = row['credit']
      s.audio = 
        if row['audio'] == nil
          row['audio']
        else
          "https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/songs/" + row['audio'] + ".mp3"
        end
      s.video = row['video']
      s.script = 
        if row['script'] == nil
          row['script']
        else
          "https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/song_script/" + row['script'] + ".pdf"
        end
      s.script_english_words = row['script_english_words']
      s.script_alutiiq_words = 
          if row['script_alutiiq_words'] == nil
            row['script_alutiiq_words']
          else (
            if row['script_alutiiq_words'].include? 'R'
              (
                if row['script_alutiiq_words'].index('_') == 0 
                  row['script_alutiiq_words']
                else
                  row['script_alutiiq_words'].gsub!('R', @littler.encode('utf-8') )
                end
              )
            else
              row['script_alutiiq_words']
            end
          )
          end
      s.traditional = row['traditional']
        if row['traditional'] == 'TRUE'
          row['traditional'] = true
        elsif row['traditional'] == ''
          row['traditional'] = false
        else row['traditional'] == 'FALSE'
          row['traditional'] = false
        end
      s.notes = row['notes']
      s.save 
      puts "#{s.title_alutiiq} saved"
    end

    puts "There are now #{Song.count} rows in the songs table"
  end

end
