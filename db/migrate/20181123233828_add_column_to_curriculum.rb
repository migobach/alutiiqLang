class AddColumnToCurriculum < ActiveRecord::Migration[5.2]
  def change
    add_column :curriculums, :group_name, :string
  end
end
