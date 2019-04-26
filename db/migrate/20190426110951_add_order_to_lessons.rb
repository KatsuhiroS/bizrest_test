class AddOrderToLessons < ActiveRecord::Migration[5.2]
  def change
    add_column :lessons, :order, :integer
  end
end
