class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :title
      t.text :body
      t.string :buttonUrl
      t.string :buttonName
      t.boolean :visible

      t.timestamps
    end
  end
end
