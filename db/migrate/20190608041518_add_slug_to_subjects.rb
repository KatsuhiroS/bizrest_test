class AddSlugToSubjects < ActiveRecord::Migration[5.2]
  def change
    add_column :subjects, :slug, :string
  end
end
