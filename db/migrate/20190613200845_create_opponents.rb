class CreateOpponents < ActiveRecord::Migration[5.2]
  def change
    create_table :opponents do |t|
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :handedness
      t.text :notes
      t.text :strengths, array: true, default: []
      t.text :weaknesses, array: true, default: []
      t.float :utr
      t.integer :match_id

      t.timestamps
    end
  end
end
