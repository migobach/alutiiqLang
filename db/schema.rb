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

ActiveRecord::Schema.define(version: 2022_05_01_045512) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

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
    t.string "creator"
  end

  create_table "curriculums", force: :cascade do |t|
    t.string "curricular_name"
    t.text "link_to_item"
    t.string "level"
    t.string "lesson_number"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "group_name"
    t.integer "order"
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
    t.string "cultural_significance"
    t.string "examples_conjugation_irregulars"
    t.string "negatives"
    t.string "literal_translation"
    t.string "additional_meanings"
  end

  create_table "editables", force: :cascade do |t|
    t.string "name"
    t.date "modifyDate"
    t.string "textShort"
    t.text "textLong"
    t.string "imageUrl"
    t.boolean "available"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "erinarpets", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "print_date"
    t.string "topic"
    t.string "author"
    t.string "article_pdf"
    t.string "image"
    t.text "notes"
  end

  create_table "games", force: :cascade do |t|
    t.string "game_name_alutiiq"
    t.string "game_name_english"
    t.string "link_to_item"
    t.string "game_group"
    t.text "notes"
    t.string "creator"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "order"
  end

  create_table "items", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.string "buttonUrl"
    t.string "buttonName"
    t.boolean "visible"
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

  create_table "posters", force: :cascade do |t|
    t.string "title"
    t.string "poster_link"
    t.string "author"
    t.string "notes"
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

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
