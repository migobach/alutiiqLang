class Erinarpet < ApplicationRecord

  def self.import(file)
    Erinarpet.delete_all 

    #belwo is borrowed from the erinarpet rake file
    file[:article].each do |row|
      i = Erinarpet.new
      # binding.pry
      i.print_date = row['print_date']
      i.topic = row['topic']
      i.author = row['author']
      i.article_pdf =
        if row['article_pdf'] == ""
          row['article_pdf']
        else 
          # TODO: handle space: make them underscores (I think, check repo)
          "https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/erinarpet/" + row['article_pdf'].gsub!(' ', '+') + ".pdf"
        end
      i.image = row['image']
      i.notes = row['notes']
      i.save 
      puts "#{i.topic} article saved"
    end 

    puts "There are now #{Erinarpet.count} articles seeded"
  end
end
