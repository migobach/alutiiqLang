class AddLessonOrderToCurriculum < ActiveRecord::Migration[5.2]
  def change
    add_column :curriculums, :order, :integer
  end
end
