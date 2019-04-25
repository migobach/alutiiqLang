class AddCreatorToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :creator, :string
  end
end
