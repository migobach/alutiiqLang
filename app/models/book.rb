class Book < ApplicationRecord
  has_one_attached :book

  @littler = "\u0280"

  def self.to_csv
    attributes = %w{
      book_title_alutiiq
      book_title_english
      description
      image
      file
      audio
      book_type
      creator
    }

    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.each do |book|
        csv << book.attributes.values_at(*attributes)
      end
    end

  end


  def self.import(file)
    Book.delete_all
  
    # below is borrowed from the rake file
      file[:book].each do |row|
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
          if row['image'] == ""
            row['image']
          else
            "https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/book_image/" + row['image']
          end
        b.file =
          if row['file'] == ""
            row['file']
          else
            "https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/book_pdf/" + row['file']
          end
        b.audio =
          if row['audio'] == ""
            row['audio']
          else 
            "https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/book_audio/" + row['audio']
          end
          
          b.book_type = row['book_type']
          b.creator = row['creator']
          b.save
        puts "#{b.book_title_alutiiq} saved"
      end
    puts "There are now #{Book.count} rows in the books table"
  end
end


