# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180608221953) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "drinks", force: :cascade do |t|
    t.string "name", null: false
    t.integer "num_reviews", default: 0, null: false
    t.float "avg_rating", default: 0.0, null: false
    t.integer "store_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["store_id"], name: "index_drinks_on_store_id"
  end

  create_table "stores", force: :cascade do |t|
    t.string "yelp_store_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["yelp_store_id"], name: "index_stores_on_yelp_store_id"
  end

end
