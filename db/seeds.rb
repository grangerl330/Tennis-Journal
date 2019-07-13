# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users
User.create(first_name: "User", last_name: "1", email: "user1@gmail.com", password: "password")
User.create(first_name: "User", last_name: "2", email: "user2@gmail.com", password: "password")
User.create(first_name: "User", last_name: "3", email: "user3@gmail.com", password: "password")

#Tournaments
Tournament.create(title: "Tournament 1", start_date: nil, end_date: nil, location: "Location 1", surface: "Hard", age_category: "16 and Under", draw_size: 128, points: 500, user_id: 1)

#Matches
Match.create(round: 128, result: "won", score: "6-0, 6-0", date: "", time: "", notes: "", tournament_id: "1", user_id: "1")
Match.create(round: 64, result: "won", score: "6-2, 6-3", date: "", time: "", notes: "", tournament_id: "1", user_id: "1")
Match.create(round: 32, result: "won", score: "6-4, 6-1", date: "", time: "", notes: "", tournament_id: "1", user_id: "1")

#Opponents
Opponent.create(first_name: "Opponent", last_name: "1", age: 18, handedness: "right", notes: "", utr: 9, match_id: 1)
Opponent.create(first_name: "Opponent", last_name: "2", age: 15, handedness: "left", notes: "", utr: 10, match_id: 2)
Opponent.create(first_name: "Opponent", last_name: "3", age: 15, handedness: "right", notes: "", utr: 11, match_id: 3)
