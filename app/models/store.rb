class Store < ApplicationRecord
  validates :yelp_store_id, presence: true, uniqueness: true

  has_many :drinks

end
