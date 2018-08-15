class AddColumbsToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :script_english_words, :string
    add_column :songs, :script_alutiiq_words, :string
    add_column :songs, :notes, :text
  end
end
