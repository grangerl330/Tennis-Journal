# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users
User.create(first_name: "User", last_name: "1", email: "user1@gmail.com", password: "password", utr: 10, match_record: "", ranking: 23)

#Tournaments
Tournament.create(title: "Tournament 1", start_date: Date.new(2019,1,1), end_date: Date.new(2019,1,3), location: "Tennis Club 1", surface: "Hard", age_category: "16 and Under", draw_size: 128, points: 500, user_id: 1)
Tournament.create(title: "Tournament 2", start_date: Date.new(2019,2,1), end_date: Date.new(2019,2,3), location: "Tennis Club 2", surface: "Clay", age_category: "16 and Under", draw_size: 64, points: 200, user_id: 1)
Tournament.create(title: "Tournament 3", start_date: Date.new(2019,3,1), end_date: Date.new(2019,3,3), location: "Tennis Club 3", surface: "Grass", age_category: "16 and Under", draw_size: 16, points: 0, user_id: 1)

#Matches
Match.create(round: 128, result: "Won", score: "6-0, 6-0", date: Date.new(2019,1,1), time: Time.new(2019,1,1,10,0,0), notes: "", tournament_id: "1", user_id: "1")
Match.create(round: 64, result: "Won", score: "6-2, 6-3", date: Date.new(2019,1,2), time: Time.new(2019,1,2,14,30,0), notes: "", tournament_id: "1", user_id: "1")
Match.create(round: 32, result: "Won", score: "6-4, 6-1", date: Date.new(2019,1,3), time: Time.new(2019,1,3,13,45,0), notes: "", tournament_id: "1", user_id: "1")
Match.create(round: 64, result: "Won", score: "7-6(2), 7-6(4)", date: Date.new(2019,2,1), time: Time.new(2019,1,1,10,0,0), notes: "", tournament_id: "2", user_id: "1")
Match.create(round: 32, result: "Won", score: "6-3, 6-3", date: Date.new(2019,2,2), time: Time.new(2019,1,2,14,30,0), notes: "", tournament_id: "2", user_id: "1")
Match.create(round: 16, result: "Won", score: "7-5, 6-0", date: Date.new(2019,2,3), time: Time.new(2019,1,3,13,45,0), notes: "", tournament_id: "2", user_id: "1")

#Opponents
Opponent.create(first_name: "Opponent", last_name: "1", age: 15, handedness: "Right", notes: "", utr: 9, match_id: 1)
Opponent.create(first_name: "Opponent", last_name: "2", age: 15, handedness: "Left", notes: "", utr: 10, match_id: 2)
Opponent.create(first_name: "Opponent", last_name: "3", age: 14, handedness: "Right", notes: "", utr: 11, match_id: 3)
Opponent.create(first_name: "Opponent", last_name: "4", age: 14, handedness: "Right", notes: "", utr: 9, match_id: 4)
Opponent.create(first_name: "Opponent", last_name: "5", age: 16, handedness: "Left", notes: "", utr: 10, match_id: 5)
Opponent.create(first_name: "Opponent", last_name: "6", age: 16, handedness: "Right", notes: "", utr: 11, match_id: 6)
