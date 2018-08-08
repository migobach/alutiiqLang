class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :book_title_alutiiq
      t.string :book_title_english
      t.text :description
      t.text :image
      t.text :file
      t.text :audio
      t.string :type

      t.timestamps
    end
  end
end
