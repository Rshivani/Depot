class AddOrderToLineItem < ActiveRecord::Migration
  def change
    add_column :line_items, :order, :referencesrails
  end
end
