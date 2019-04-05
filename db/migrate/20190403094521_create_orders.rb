class CreateOrders < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.string :name
      t.timestamps null: false
    end

    create_table :books do |t|
      t.belongs_to :author, index: true
      t.string :title
      t.string :number_of_page
      t.datetime :published_at
      t.timestamps
    end
  end
end
