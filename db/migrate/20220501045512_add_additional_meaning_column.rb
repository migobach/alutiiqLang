class AddAdditionalMeaningColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :dictionaries, :additional_meanings, :string
  end
end