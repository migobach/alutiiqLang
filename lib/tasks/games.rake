# https://s3-us-west-2.amazonaws.com/alutiiq-language-resources/game/Actions+Pingua+Cards+Call+List.pdf
require 'csv'

namespace :game do
  task database: :environment do
    csv_text = File.read(Rails.root.join('lib', 'seeds', 'games.csv'))
    csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')

    csv.each do |row|
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