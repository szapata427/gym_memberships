import React from 'react';
import './App.css';
import Home from '../src/components/home'
import SearchGym from '../src/components/searchGym'
import GymImages from '../src/components/gymImages'
// import Map from '../src/components/map'



function App() {



  return (
    <div className="App">
      <SearchGym />
      <Home />
    </div>
  );
}



export default App;



// # This file is auto-generated from the current state of the database. Instead
// # of editing this file, please use the migrations feature of Active Record to
// # incrementally modify your database, and then regenerate this schema definition.
// #
// # Note that this schema.rb definition is the authoritative source for your
// # database schema. If you need to create the application database on another
// # system, you should be using db:schema:load, not running all the migrations
// # from scratch. The latter is a flawed and unsustainable approach (the more migrations
// # you'll amass, the slower it'll run and the greater likelihood for issues).
// #
// # It's strongly recommended that you check this file into your version control system.

// ActiveRecord::Schema.define(version: 2019_06_06_194407) do

//   create_table "gyms", force: :cascade do |t|
//     t.string "name"
//     t.integer "numLocations"
//     t.string "value"
//     t.datetime "created_at", null: false
//     t.datetime "updated_at", null: false
//   end

//   create_table "memberships", force: :cascade do |t|
//     t.integer "gym_id"
//     t.string "type"
//     t.string "name"
//     t.decimal "montlyPrice"
//     t.decimal "initialPayment"
//     t.decimal "yearlyFee"
//     t.decimal "yearlyPrice"
//     t.boolean "monthly"
//     t.datetime "created_at", null: false
//     t.datetime "updated_at", null: false
//     t.index ["gym_id"], name: "index_memberships_on_gym_id"
//   end

// end
