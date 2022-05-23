class CreatePostbases < ActiveRecord::Migration[5.2]
  def change
    create_table :postbases do |t|
      t.string :enclitic
      t.string :postbase
      t.string :postbasev1
      t.string :postbasev2
      t.string :translation
      t.string :example1
      t.string :example1audio
      t.string :example1translation
      t.string :example2
      t.string :example2audio
      t.string :example2translation
      t.string :example3
      t.string :example3audio
      t.string :example3translation
      t.text :notes
      t.string :postbaseclean1
      t.string :postbaseclean2

      t.timestamps
    end
  end
end
