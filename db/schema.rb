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

ActiveRecord::Schema.define(version: 2018_11_18_030913) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "books", force: :cascade do |t|
    t.string "book_title_alutiiq"
    t.string "book_title_english"
    t.text "description"
    t.text "image"
    t.text "file"
    t.text "audio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "book_type"
  end

  create_table "curriculums", force: :cascade do |t|
    t.string "curricular_name"
    t.text "link_to_item"
    t.string "level"
    t.string "lesson_number"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dictionaries", force: :cascade do |t|
    t.string "english"
    t.string "part_of_speech"
    t.string "alutiiq_north"
    t.string "north_audio"
    t.string "north_sentence"
    t.string "alutiiq_south"
    t.string "south_audio"
    t.string "south_sentence"
    t.string "image_name"
    t.string "root_word"
    t.string "category"
    t.string "edited_by"
    t.text "notes"
    t.boolean "completed"
    t.boolean "approved"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "erinarpets", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "materials", force: :cascade do |t|
    t.string "resource_title"
    t.text "file_url"
    t.text "url"
    t.string "author"
    t.integer "year"
    t.string "grade"
    t.string "standards"
    t.text "subjects"
    t.text "values"
    t.text "sponsors"
    t.string "keywords"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "songs", force: :cascade do |t|
    t.string "title_english"
    t.string "title_alutiiq"
    t.string "credit"
    t.text "audio"
    t.text "video"
    t.text "script"
    t.boolean "traditional"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "script_english_words"
    t.string "script_alutiiq_words"
    t.text "notes"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

end
