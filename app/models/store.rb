class Store < ApplicationRecord
  validates :yelp_store_id, presence: true, uniqueness: true

  has_many :drinks

  alias_attribute :id, :yelp_store_id
end
