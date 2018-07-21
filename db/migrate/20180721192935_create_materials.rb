class CreateMaterials < ActiveRecord::Migration[5.2]
  def change
    create_table :materials do |t|
      t.string :resource_title
      t.string :file_url
      t.string :url
      t.string :author
      t.integer :year
      t.string :grade
      t.string :standards
      t.text :subjects
      t.text :values
      t.text :sponsors
      t.string :keywords
      t.text :notes

      t.timestamps
    end
  end
end
