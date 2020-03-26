class CreateRankings < ActiveRecord::Migration[5.2]
  def change
    create_table :rankings do |t|
      t.integer :rank
      t.string :month
      t.string :year
      t.integer :user_id
      
      t.timestamps
    end
  end
end
