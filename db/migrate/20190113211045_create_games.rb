class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :game_name_alutiiq
      t.string :game_name_english
      t.string :link_to_item
      t.string :game_group
      t.text :notes
      t.string :order
      t.string :creator

      t.timestamps
    end
  end
end
