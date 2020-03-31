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

ActiveRecord::Schema.define(version: 2020_03_26_232146) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "matches", force: :cascade do |t|
    t.integer "round"
    t.string "result"
    t.string "score"
    t.date "date"
    t.time "time"
    t.text "notes"
    t.integer "forehand_unforced_errors", default: 0
    t.integer "backhand_unforced_errors", default: 0
    t.integer "slice_unforced_errors", default: 0
    t.integer "forehand_volley_unforced_errors", default: 0
    t.integer "backhand_volley_unforced_errors", default: 0
    t.integer "overhead_unforced_errors", default: 0
    t.integer "forehand_forced_errors", default: 0
    t.integer "backhand_forced_errors", default: 0
    t.integer "slice_forced_errors", default: 0
    t.integer "forehand_volley_forced_errors", default: 0
    t.integer "backhand_volley_forced_errors", default: 0
    t.integer "overhead_forced_errors", default: 0
    t.integer "winners", default: 0
    t.integer "forehand_winners", default: 0
    t.integer "backhand_winners", default: 0
    t.integer "slice_winners", default: 0
    t.integer "forehand_volley_winners", default: 0
    t.integer "backhand_volley_winners", default: 0
    t.integer "overhead_winners", default: 0
    t.integer "deuce_side_double_faults", default: 0
    t.integer "ad_side_double_faults", default: 0
    t.integer "deuce_side_aces", default: 0
    t.integer "ad_side_aces", default: 0
    t.integer "deuce_side_service_winners", default: 0
    t.integer "ad_side_service_winners", default: 0
    t.integer "tournament_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "opponents", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.integer "age"
    t.string "handedness"
    t.text "notes"
    t.text "strengths", default: [], array: true
    t.text "weaknesses", default: [], array: true
    t.float "utr"
    t.integer "match_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rankings", force: :cascade do |t|
    t.integer "rank"
    t.string "month"
    t.string "year"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tournaments", force: :cascade do |t|
    t.string "title"
    t.date "start_date"
    t.date "end_date"
    t.string "location"
    t.string "surface"
    t.string "age_category"
    t.integer "draw_size"
    t.integer "points"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.float "utr"
    t.string "match_record", default: ""
    t.integer "current_ranking"
    t.integer "points", default: 0
    t.string "short_term_goal", default: ""
    t.string "mid_term_goal", default: ""
    t.string "long_term_goal", default: ""
    t.text "strengths", default: [], array: true
    t.text "weaknesses", default: [], array: true
    t.text "notes", default: ""
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
