class Drink < ApplicationRecord
  validates :store_id, :name, presence: true

  belongs_to :store

  # has_many :reviews

  def update_name(name)
    self.update_attributes(name: name)
  end

  def update_review_count

  end 

  def update_rating

  end 
  
end
