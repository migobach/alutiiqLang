class CreatePosters < ActiveRecord::Migration[5.2]
  def change
    create_table :posters do |t|
      t.string :title
      t.string :poster_link
      t.string :author
      t.string :notes

      t.timestamps
    end
  end
end
