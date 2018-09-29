require 'csv'

namespace :song do
  task database: :environment do
    csv_text = File.read(Rails.root.join('lib', 'seeds', 'newSongsAws.csv'))
    puts csv_text
    csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
    
    csv.each do |row|
      puts row.to_hash
      # binding.pry
      
      s = Song.new
      s.title_english = row['title_english']
      s.title_alutiiq = row['title_alutiiq']
      s.credit = row['credit']
      s.audio = row['audio']
      s.video = row['video']
      s.script = row['script']
      s.script_english_words = row['script_english_words']
      s.script_alutiiq_words = row['script_alutiiq_words']
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
