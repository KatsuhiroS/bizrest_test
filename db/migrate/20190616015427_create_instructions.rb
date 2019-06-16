class CreateInstructions < ActiveRecord::Migration[5.2]
  def change
    create_table :instructions do |t|
      t.text :text
      t.integer :chapter_id

      t.timestamps
    end
  end
end
