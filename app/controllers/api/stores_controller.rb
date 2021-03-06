class Api::StoresController < ApplicationController
  require "json"
  require "http"
  require "optparse"

  def create(yelp_store_info)
    @store = Store.new(store_params)

    if @store.save
      render json: yelp_store_info.to_json
    else 
      render json: @store.errors.full_messages, status: 422
    end 
  end 

  def index 
    response = search(params[:term], params[:location])
    
    if response["businesses"].length > 0 
      render json: response.to_json
    else
      render json: { error: "Could not find any results" }
    end
  end 

  def show
    yelp_store_info = get_store_info(params[:id])
    @store = Store.find_by(yelp_store_id: yelp_store_info["alias"])

    unless yelp_store_info["error"]
      if @store 
        render json: yelp_store_info.to_json
      elsif find_categories(yelp_store_info).include?("bubbletea")
        create(yelp_store_info)
      else
        render json: { error: "Business is not a Boba Shop" }, status: 422
      end 
    else 
      render json: { error: "Business does not exist" }, status: 404
    end 
  end 

  private   

  def store_params 
    params.permit(:id)
  end 

  def find_categories(yelp_store_info) 
    yelp_store_info["categories"].map { |hash| hash["alias"]}
  end 

  # Constants, do not change these
  API_KEY = '467mR1Rp6HH3uwrJdQulLhSstM1SMXY_LJyCKZD_DgVuYPUTVRh9YFbXES9vrUOiVmX32U04PYyMK7c38tzd0JNaIyny_pdVf0dnrJNTI6ak6cpoCwkOl2QlJVqOWnYx'
  API_HOST = "https://api.yelp.com"
  SEARCH_PATH = "/v3/businesses/search"
  BUSINESS_PATH = "/v3/businesses/"  # trailing / because we append the business id to the path
  AUTOCOMPLETE_PATH = "/v3/autocomplete"

  DEFAULT_BUSINESS_ID = "yelp-san-francisco"
  DEFAULT_LOCATION = "San Francisco, CA" 
  DEFAULT_CATEGORY = "bubbletea"
  SEARCH_LIMIT = 10

  def get_store_info(yelp_store_id)
    url = "#{API_HOST}#{BUSINESS_PATH}#{yelp_store_id}"
    response = HTTP.auth("Bearer #{API_KEY}").get(url)
    response.parse
  end 

  def search(term = DEFAULT_CATEGORY, location = DEFAULT_LOCATION)
    url = "#{API_HOST}#{SEARCH_PATH}"
    params = {
      term: "#{term}",
      location: location,
      limit: SEARCH_LIMIT,
      categories: DEFAULT_CATEGORY
    }
    response = HTTP.auth("Bearer #{API_KEY}").get(url, params: params)
    response.parse
  end

  # def autocomplete(str)
  #   url = "#{API_HOST}#{AUTOCOMPLETE_PATH}"
  #   params = {
  #     text: str
  #   }
  #   response = HTTP.auth("Bearer #{API_KEY}").get(url, params: params)
  #   response.parse
  # end 

end
