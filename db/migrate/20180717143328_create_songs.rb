class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title_english
      t.string :title_alutiiq
      t.string :credit
      t.text :audio
      t.text :video
      t.text :script
      t.boolean :traditional

      t.timestamps
    end
  end
end
