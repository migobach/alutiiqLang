require 'csv'

namespace :erinarpet do 
  task database: :environment do 
    csv_text = File.read(Rails.root.join('lib', 'seeds', 'erinarpet.csv'))
    puts 'reading csv text'
    csv.CSV.parse(csv_text, :headers => true, :econding => 'ISO-8859-1')
    csv.each do |row|
      e = Erinarpet.new
      e.print_date = row['print_date']
      e.topic = row['topic']
      e.author = row['author']
      e.article_pdf = row['article_pdf']
        if row['article_pdf'] == nil
          row['article_pdf']
        else "https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/erinarpet/" + row['article_pdf']
        end
      e.image = row['image']
      e.notes = row['notes']
      e.save 
      puts "#{e.topic} article saved"
    end 

    puts "There are now #{Erinarpet.count} articles seeded"
  end

end
