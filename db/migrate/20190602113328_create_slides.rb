class CreateSlides < ActiveRecord::Migration[5.2]
  def change
    create_table :slides do |t|
      t.string :title
      t.integer :order
      t.text :content
      t.text :image
      t.integer :chapter_id
      t.timestamps
    end
  end
end
