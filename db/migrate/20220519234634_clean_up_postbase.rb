class CleanUpPostbase < ActiveRecord::Migration[5.2]
  def change
    remove_column :postbases, :enclitic
    remove_column :postbases, :postbase
    remove_column :postbases, :postbaseclean1
    remove_column :postbases, :postbaseclean2
    add_column :postbases, :postbase1, :string
    add_column :postbases, :postbase2, :string
    add_column :postbases, :postbase3, :string
    add_column :postbases, :complexityranking, :string
    add_column :postbases, :cleanpostbase1, :string
    add_column :postbases, :cleanpostbase2, :string
  end
end
