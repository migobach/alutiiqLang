class CreateDictionaries < ActiveRecord::Migration[5.2]
  def change
    create_table :dictionaries do |t|
      t.string :english
      t.string :part_of_speech
      t.string :alutiiq_north
      t.string :north_audio
      t.string :north_sentence
      t.string :alutiiq_south
      t.string :south_audio
      t.string :south_sentence
      t.string :image_name
      t.string :root_word
      t.string :category
      t.string :edited_by
      t.text :notes
      t.boolean :completed
      t.boolean :approved

      t.timestamps
    end
  end
end
