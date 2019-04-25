class AddOrderToGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :order, :integer
  end
end
