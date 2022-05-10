class AddColumnForPageItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :page, :string
  end
end
