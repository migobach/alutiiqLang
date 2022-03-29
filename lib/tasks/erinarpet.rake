require 'csv'

namespace :erinarpet do 
  task database: :environment do 
    csv_text = File.read(Rails.root.join('lib', 'seeds', 'erinarpet.csv'))
    csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
    
    csv.each do |row|
      i = Erinarpet.new

      i.print_date = row['print_date']
      i.topic = row['topic']
      i.author = row['author']
      i.article_pdf =
        if row['article_pdf'] == nil
          row['article_pdf']
        else 
          # TODO: handle space: make them underscores (I think, check repo)
          "https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/erinarpet/" + row['article_pdf'].gsub!(' ', '+') + ".pdf"
        end
      i.image = row['image']
      i.notes = row['notes']
      i.save 
    end 

    puts "There are now #{Erinarpet.count} articles seeded"
  end

end
