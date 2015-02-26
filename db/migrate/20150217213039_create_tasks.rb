class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.text :goal
      t.date :due_date

      t.timestamps null: false
    end
  end
end
