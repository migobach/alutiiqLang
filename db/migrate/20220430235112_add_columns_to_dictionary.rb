class AddColumnsToDictionary < ActiveRecord::Migration[5.2]
  def change
    add_column :dictionaries, :cultural_significance, :string
    add_column :dictionaries, :examples_conjugation_irregulars, :string
    add_column :dictionaries, :negatives, :string
    add_column :dictionaries, :literal_translation, :string
  end
end
