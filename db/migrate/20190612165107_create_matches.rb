class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.string :round
      t.string :result
      t.string :score

      t.timestamps
    end
  end
end
