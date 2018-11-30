class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.integer :rating
      t.string :price
      t.string :phone
      t.string :business_alias
      t.boolean :is_closed
      t.text :categories
      t.integer :review_count
      t.string :name
      t.string :url
      t.text :coordinates
      t.string :image_url
      t.string :location
      t.float :distance
      t.string :transactions
      t.string :yelp_id
      t.boolean :is_claimed

      t.timestamps
    end
  end
end
