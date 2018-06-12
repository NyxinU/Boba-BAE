class Api::StoresController < ApplicationController
  require "json"
  require "http"
  require "optparse"

  def create
    @store = Store.new(store_params)

    if @store.save
      render :show 
    else 
      render json: @store.errors.full_messages, status: 422
    end 
  end 

  def show
    @store = Store.find_by(yelp_store_id: params[:id])
    yelp_store_info = get_store_info(params[:id])

    
    if yelp_store_info
      categories = find_categories(yelp_store_info)
      if @store 
        render json: yelp_store_info.to_json
      elsif categories.include?("bubbletea")
        create
      else
        render json:["Business is not a Boba Shop"], status: 422
      end 
    else 
      render json: ["Business does not exist"], status: 404
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
