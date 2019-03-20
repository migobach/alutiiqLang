class Game < ApplicationRecord

  def self.import(file)
    Game.delete_all

    #below is borroed from the rake file
      file[:game].each do |row|
        g = Game.new
        g.game_name_alutiiq = row['game_name_alutiiq']
        g.game_name_english = row['game_name_english']
        g.link_to_item = 
          if row['link_to_item'] == nil 
            row['link_to_item']
          else
            "https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/game/" + row['link_to_item'].gsub(' ', '+')
          end 
        g.game_group = row['game_group']
        g.notes = row['notes']
        g.order = row['order']
        g.creator = row['creator']
        g.save
      end
    puts "There are now #{Game.count} rows in the games table"
  end
end
