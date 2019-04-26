class CreateChapters < ActiveRecord::Migration[5.2]
  def change
    create_table :chapters do |t|
      t.string :title
      t.integer :order
      t.integer :lesson_id
      t.timestamps
    end
  end
end
