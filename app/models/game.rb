class Game < ApplicationRecord

  def self.to_csv
    attributes = %w{
      game_name_alutiiq
      game_name_english
      link_to_item
      game_group
      notes
      creator
      order
    }

    CSV.generate(headers: true) do |csv|
      csv << attributes 

      all.each do |game|
        csv << game.attributes.values_at(*attributes)
      end
    end
  end

  def self.import(file)
    Game.delete_all

    #below is borroed from the rake file
      file[:game].each do |row|
        g = Game.new
        g.game_name_alutiiq = row['game_name_alutiiq']
        g.game_name_english = row['game_name_english']
        g.link_to_item = row['link_to_item']
        g.game_group = row['game_group']
        g.notes = row['notes']
        g.order = row['order']
        g.creator = row['creator']
        g.save
      end
    puts "There are now #{Game.count} rows in the games table"
  end
end
