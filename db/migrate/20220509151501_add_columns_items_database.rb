class AddColumnsItemsDatabase < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :location, :string
    add_column :items, :contact, :string
  end
end
