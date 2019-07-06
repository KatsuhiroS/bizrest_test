class CreateAnswerSpaces < ActiveRecord::Migration[5.2]
  def change
    create_table :answer_spaces do |t|
      t.string :category
      t.string :user_answer
      t.integer :answer_column_id

      t.timestamps
    end
  end
end
