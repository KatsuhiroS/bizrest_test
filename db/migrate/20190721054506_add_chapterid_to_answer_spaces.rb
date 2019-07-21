class AddChapteridToAnswerSpaces < ActiveRecord::Migration[5.2]
  def change
    add_column :answer_spaces, :chapter_id, :string, after: :user_answer
  end
end
