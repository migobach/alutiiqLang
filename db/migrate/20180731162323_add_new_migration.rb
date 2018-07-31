class AddNewMigration < ActiveRecord::Migration[5.2]
  def change
    create_table :curriculums do |t|
      t.string :curricular_name
      t.text :link_to_item
      t.string :level
      t.string :lesson_number
      t.text :notes

      t.timestamps
    end
  end
end
