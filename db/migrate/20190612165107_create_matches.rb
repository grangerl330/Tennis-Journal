class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.integer :round
      t.string :result
      t.string :score
      t.date :date
      t.time :time
      t.text :notes
      t.integer :forehand_unforced_errors, default: 0
      t.integer :backhand_unforced_errors, default: 0
      t.integer :slice_unforced_errors, default: 0
      t.integer :forehand_volley_unforced_errors, default: 0
      t.integer :backhand_volley_unforced_errors, default: 0
      t.integer :overhead_unforced_errors, default: 0
      t.integer :forehand_forced_errors, default: 0
      t.integer :backhand_forced_errors, default: 0
      t.integer :slice_forced_errors, default: 0
      t.integer :forehand_volley_forced_errors, default: 0
      t.integer :backhand_volley_forced_errors, default: 0
      t.integer :overhead_forced_errors, default: 0
      t.integer :winners, default: 0
      t.integer :forehand_winners, default: 0
      t.integer :backhand_winners, default: 0
      t.integer :slice_winners, default: 0
      t.integer :forehand_volley_winners, default: 0
      t.integer :backhand_volley_winners, default: 0
      t.integer :overhead_winners, default: 0
      t.integer :deuce_side_double_faults, default: 0
      t.integer :ad_side_double_faults, default: 0
      t.integer :deuce_side_aces, default: 0
      t.integer :ad_side_aces, default: 0
      t.integer :deuce_side_service_winners, default: 0
      t.integer :ad_side_service_winners, default: 0
      t.integer :tournament_id
      t.integer :user_id

      t.timestamps
    end
  end
end
