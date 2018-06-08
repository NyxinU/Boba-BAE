class CreateDrinks < ActiveRecord::Migration[5.1]
  def change
    create_table :drinks do |t|
      t.string :name, null: false
      t.integer :num_reviews, null: false, default: 0
      t.float :avg_rating, null: false, default: 0 
      t.integer :store_id, null: false

      t.timestamps
    end

    add_index :drinks, :store_id 
  end
end
