# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_10_185550) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bank_histories", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "bank_transaction_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["bank_transaction_id"], name: "index_bank_histories_on_bank_transaction_id"
    t.index ["user_id"], name: "index_bank_histories_on_user_id"
  end

  create_table "bank_transactions", force: :cascade do |t|
    t.money "amount", scale: 2
    t.string "transaction_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_bank_transactions_on_user_id"
  end

  create_table "bets", force: :cascade do |t|
    t.string "sports_title"
    t.string "date"
    t.string "home_team"
    t.string "away_team"
    t.string "home_odds"
    t.string "away_odds"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "betslips", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "bet_id", null: false
    t.boolean "winner"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.money "wager", scale: 2
    t.money "winnings", scale: 2
    t.string "odds"
    t.index ["bet_id"], name: "index_betslips_on_bet_id"
    t.index ["user_id"], name: "index_betslips_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "message"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "messengers", force: :cascade do |t|
    t.integer "user_one"
    t.integer "user_two"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.money "bank", scale: 2, default: "0.0"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "bank_histories", "bank_transactions"
  add_foreign_key "bank_histories", "users"
  add_foreign_key "bank_transactions", "users"
  add_foreign_key "betslips", "bets"
  add_foreign_key "betslips", "users"
  add_foreign_key "messages", "users"
end
