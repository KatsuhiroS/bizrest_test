class CreateAnswerChoices < ActiveRecord::Migration[5.2]
  def change
    create_table :answer_choices do |t|
      t.string :name
      t.string :item_type
      t.integer :chapter_id

      t.timestamps
    end
  end
end
