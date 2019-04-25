class ChangeOrderToBeIntegerInGame < ActiveRecord::Migration[5.2]
  def up
    remove_column :games, :order
  end
end

