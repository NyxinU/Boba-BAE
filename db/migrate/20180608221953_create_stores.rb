class CreateStores < ActiveRecord::Migration[5.1]
  def change
    create_table :stores do |t|
      t.string :yelp_store_id

      t.timestamps
    end

    add_index :stores, :yelp_store_id
  end
end
