require 'csv'

@littler = "\u0280"

namespace :books do
  task database: :environment do
    csv_text = File.read(Rails.root.join('lib', 'seeds', 'books.csv'))
    # puts csv_text
    csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
    csv.each do |row|
      b = Book.new
      b.book_title_english = row['book_title_english']
      b.book_title_alutiiq = 
        if row['book_title_alutiiq'].include? '_'
          (
            if row['book_title_alutiiq'].index('_') == 0 
              row['book_title_alutiiq'].gsub(/_/, 'R')
            else
              row['book_title_alutiiq'].gsub!(/_/, '_' => @littler.encode('utf-8') )
            end
          )
        else 
          row['book_title_alutiiq']
        end
      b.description = row['description']
      b.image = 
        if row['image'] == nil
          row['image']
        else
          "https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/book_image/" + row['image']
        end
      b.file =
        if row['file'] == nil
          row['file']
        else
          "https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/book_pdf/" + row['file']
        end
      b.audio =
        if row['audio'] == nil
          row['audio']
        else 
          "https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/book_audio/" + row['audio']
        end
        
        b.book_type = row['book_type']

        b.save
      puts "#{b.book_title_alutiiq} saved"
    end
    puts "There are now #{Book.count} rows in the books table"
  end

end
