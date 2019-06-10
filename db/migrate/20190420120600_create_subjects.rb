class CreateSubjects < ActiveRecord::Migration[5.2]
  def change
    create_table :subjects do |t|
      t.string :title, null: false
      t.text :explanation, null: false
      t.string :image, null: false
      t.integer :order, null: false
      t.string :slug, null: false
      t.timestamps
    end
  end
end
