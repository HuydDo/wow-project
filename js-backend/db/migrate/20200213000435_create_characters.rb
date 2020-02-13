class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :gender
      t.string :name
      t.string :race
      t.string :character_class
      t.references :player, null: false, foreign_key: true

      t.timestamps
    end
  end
end
