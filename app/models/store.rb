class Store < ApplicationRecord
  validates :yelp_store_id, presence: true, uniqueness: true

  has_many :drinks

  require "http"
  require "optparse"


  # Constants, do not change these
  API_KEY = '467mR1Rp6HH3uwrJdQulLhSstM1SMXY_LJyCKZD_DgVuYPUTVRh9YFbXES9vrUOiVmX32U04PYyMK7c38tzd0JNaIyny_pdVf0dnrJNTI6ak6cpoCwkOl2QlJVqOWnYx'
  API_HOST = "https://api.yelp.com"
  SEARCH_PATH = "/v3/businesses/search"
  BUSINESS_PATH = "/v3/businesses/"  # trailing / because we append the business id to the path


  DEFAULT_BUSINESS_ID = "yelp-san-francisco"
  DEFAULT_TERM = "boba"
  DEFAULT_LOCATION = "San Francisco, CA"
  SEARCH_LIMIT = 5

  def get_store_info(yelp_store_id)
    url = "#{API_HOST}#{BUSINESS_PATH}#{yelp_store_id}"
    response = HTTP.auth("Bearer #{API_KEY}").get(url)
    response.parse
  end 

end
