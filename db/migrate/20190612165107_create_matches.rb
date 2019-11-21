class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.integer :round
      t.string :result
      t.string :score
      t.date :date
      t.time :time
      t.text :notes
      t.integer :unforced_errors
      t.integer :forced_errors
      t.integer :winners
      t.integer :double_faults
      t.integer :aces
      t.integer :tournament_id
      t.integer :user_id

      t.timestamps
    end
  end
end
