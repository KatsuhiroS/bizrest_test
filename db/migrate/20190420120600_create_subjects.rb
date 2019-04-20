class CreateSubjects < ActiveRecord::Migration[5.2]
  def change
    create_table :subjects do |t|
      t.string :title
      t.text :explanation
      t.string :image
      t.integer :order

      t.timestamps
    end
  end
end
