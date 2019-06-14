class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.integer :round
      t.string :result
      t.string :score
      t.date :date
      t.time :time
      t.string :notes
      t.integer :tournament_id

      t.timestamps
    end
  end
end
