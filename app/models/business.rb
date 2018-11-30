class Business < ApplicationRecord
  serialize :location
  serialize :categories, Array
  serialize :transactions, Array
  serialize :coordinates, Array
end
