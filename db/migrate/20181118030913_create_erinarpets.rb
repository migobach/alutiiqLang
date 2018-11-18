class CreateErinarpets < ActiveRecord::Migration[5.2]
  def change
    create_table :erinarpets do |t|

      t.timestamps
    end
  end
end
