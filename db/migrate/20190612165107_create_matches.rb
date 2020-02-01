class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.integer :round
      t.string :result
      t.string :score
      t.date :date
      t.time :time
      t.text :notes
      t.integer :forehand_unforced_errors
      t.integer :backhand_unforced_errors
      t.integer :slice_unforced_errors
      t.integer :forehand_volley_unforced_errors
      t.integer :backhand_volley_unforced_errors
      t.integer :overhead_unforced_errors
      t.integer :forehand_forced_errors
      t.integer :backhand_forced_errors
      t.integer :slice_forced_errors
      t.integer :forehand_volley_forced_errors
      t.integer :backhand_volley_forced_errors
      t.integer :overhead_forced_errors
      t.integer :winners
      t.integer :forehand_winners
      t.integer :backhand_winners
      t.integer :slice_winners
      t.integer :forehand_volley_winners
      t.integer :backhand_volley_winners
      t.integer :overhead_winner
      t.integer :double_faults
      t.integer :aces
      t.integer :tournament_id
      t.integer :user_id

      t.timestamps
    end
  end
end
