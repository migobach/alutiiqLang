require 'csv'

namespace :books do
  task database: :environment do
    csv_text = File.read(Rails.root.join('lib', 'seeds', 'books.csv'))
    puts csv_text
    csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
    csv.each do |row|
      b = Book.new
      b.book_title_english = row['book_title_english']
      b.book_title_alutiiq = row['book_title_alutiiq']
      b.description = row['description']
      b.image = row['image']
      b.file = row['file']
      b.audio = row['audio']
      b.type = row['type']
      b.save
      puts "#{b.book_title_alutiiq} saved"
    end
    puts "There are now #{Book.count} rows in the books table"
  end

end
