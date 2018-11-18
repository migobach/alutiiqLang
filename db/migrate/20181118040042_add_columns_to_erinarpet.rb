class AddColumnsToErinarpet < ActiveRecord::Migration[5.2]
  def change
    add_column :erinarpets, :print_date, :string
    add_column :erinarpets, :topic, :string
    add_column :erinarpets, :author, :string
    add_column :erinarpets, :article_pdf, :string
    add_column :erinarpets, :image, :string
    add_column :erinarpets, :notes, :text
  end
end
