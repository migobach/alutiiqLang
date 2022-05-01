class CreateEditables < ActiveRecord::Migration[5.2]
  def change
    create_table :editables do |t|
      t.string :name
      t.date :modifyDate
      t.string :textShort
      t.text :textLong
      t.string :imageUrl
      t.boolean :available
      t.timestamps
    end
  end
end
