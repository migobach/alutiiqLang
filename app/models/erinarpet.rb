class Erinarpet < ApplicationRecord

  def self.to_csv
    attributes = %w{
      print_date
      topic
      author
      article_pdf
      image
      notes
    }

    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.each do |article|
        csv << article.attributes.values_at(*attributes)
      end
    end
  end

  def self.import(file)
    Erinarpet.delete_all 

    #belwo is borrowed from the erinarpet rake file
    file[:article].each do |row|
      i = Erinarpet.new
       
      i.print_date = row['print_date']
      i.topic = row['topic']
      i.author = row['author']
      i.article_pdf = row['article_pdf']
      i.image = row['image']
      i.notes = row['notes']
      i.save 
      puts "#{i.topic} article saved"
    end 

    puts "There are now #{Erinarpet.count} articles seeded"
  end
end
