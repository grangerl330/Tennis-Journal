class CreateTournaments < ActiveRecord::Migration[5.2]
  def change
    create_table :tournaments do |t|
      t.string :title
      t.date :start_date
      t.date :end_date
      t.string :location
      t.string :surface
      t.string :age_category
      t.integer :draw_size
      t.integer :points
      t.integer :user_id

      t.timestamps
    end
  end
end
