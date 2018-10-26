class RemoveTypeFromBooks < ActiveRecord::Migration[5.2]
  def change
    remove_column :books, :type, :string
  end
end
