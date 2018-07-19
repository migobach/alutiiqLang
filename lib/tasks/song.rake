require 'csv'

namespace :song do
  task database: :environment do
    csv_text = File.read(Rails.root.join('lib', 'seeds', 'songs.csv'))
    puts csv_text
    csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
    csv.each do |row|
      s = Song.new
      s.title_english = row['title_english']
      s.title_alutiiq = row['title_alutiiq']
      s.credit = row['credit']
      s.audio = row['audio']
      s.video = row['video']
      s.script = row['script']
      s.traditional = row['traditional']
      s.save 
    end

    puts "There are now #{Song.count} rows in the songs table"
  end

end
