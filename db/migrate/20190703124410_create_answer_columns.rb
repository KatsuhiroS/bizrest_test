class CreateAnswerColumns < ActiveRecord::Migration[5.2]
  def change
    create_table :answer_columns do |t|
      t.integer :order
      t.integer :chapter_id

      t.timestamps
    end
  end
end
