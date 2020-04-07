# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users
User.create(first_name: "User", last_name: "1", email: "user1@gmail.com", password: "password", utr: 10, match_record: "", points: 0, short_term_goal: "Improve forehand consistency", mid_term_goal: "Get ranked inside top 20", long_term_goal: "Get recruited to D1 school", strengths: ["Forehand", "Serve"], weaknesses: ["Backhand"], notes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta in, fugiat fugit saepe necessitatibus, rem. Explicabo quis doloribus dolores soluta harum a minima tempora nemo perferendis quia dolorem porro autem minus sequi repellat veniam unde, quae eligendi possimus asperiores fuga nihil reprehenderit assumenda natus molestias. Impedit, aperiam enim laudantium")
User.create(first_name: "Roger", last_name: "Federer", email: "rogerfederer@gmail.com", password: "password", utr: 16, match_record: "", points: 0)

#Rankings
#2020
Ranking.create(rank: 8, month: "Jan", year: "2020", user_id: 1)
Ranking.create(rank: 8, month: "Feb", year: "2020", user_id: 1)
Ranking.create(rank: 8, month: "Mar", year: "2020", user_id: 1)

#2019
Ranking.create(rank: 20, month: "Jan", year: "2019", user_id: 1)
Ranking.create(rank: 23, month: "Feb", year: "2019", user_id: 1)
Ranking.create(rank: 18, month: "Mar", year: "2019", user_id: 1)
Ranking.create(rank: 16, month: "Apr", year: "2019", user_id: 1)
Ranking.create(rank: 17, month: "May", year: "2019", user_id: 1)
Ranking.create(rank: 13, month: "Jun", year: "2019", user_id: 1)
Ranking.create(rank: 10, month: "Jul", year: "2019", user_id: 1)
Ranking.create(rank: 10, month: "Aug", year: "2019", user_id: 1)
Ranking.create(rank: 11, month: "Sept", year: "2019", user_id: 1)
Ranking.create(rank: 9, month: "Oct", year: "2019", user_id: 1)
Ranking.create(rank: 8, month: "Nov", year: "2019", user_id: 1)
Ranking.create(rank: 8, month: "Dec", year: "2019", user_id: 1)
#2018
Ranking.create(rank: 35, month: "Jan", year: "2018", user_id: 1)
Ranking.create(rank: 34, month: "Feb", year: "2018", user_id: 1)
Ranking.create(rank: 32, month: "Mar", year: "2018", user_id: 1)
Ranking.create(rank: 30, month: "Apr", year: "2018", user_id: 1)
Ranking.create(rank: 31, month: "May", year: "2018", user_id: 1)
Ranking.create(rank: 27, month: "Jun", year: "2018", user_id: 1)
Ranking.create(rank: 25, month: "Jul", year: "2018", user_id: 1)
Ranking.create(rank: 25, month: "Aug", year: "2018", user_id: 1)
Ranking.create(rank: 24, month: "Sept", year: "2018", user_id: 1)
Ranking.create(rank: 25, month: "Oct", year: "2018", user_id: 1)
Ranking.create(rank: 22, month: "Nov", year: "2018", user_id: 1)
Ranking.create(rank: 22, month: "Dec", year: "2018", user_id: 1)

#Tournaments
Tournament.create(title: "Tournament 1", start_date: Date.new(2019,1,1), end_date: Date.new(2019,1,3), location: "Tennis Club 1", surface: "Hard", age_category: "16 and Under", draw_size: 128, points: 500, user_id: 1)
Tournament.create(title: "Tournament 2", start_date: Date.new(2019,2,1), end_date: Date.new(2019,2,3), location: "Tennis Club 2", surface: "Clay", age_category: "16 and Under", draw_size: 64, points: 200, user_id: 1)
Tournament.create(title: "Tournament 3", start_date: Date.new(2019,3,1), end_date: Date.new(2019,3,3), location: "Tennis Club 3", surface: "Grass", age_category: "16 and Under", draw_size: 16, points: 0, user_id: 1)
Tournament.create(title: "L5 Westchester Tennis Center Eastern January Championships", start_date: Date.new(2020,1,3), end_date: Date.new(2019,1,5), location: "Westchester Tennis Center", surface: "Hard", age_category: "16 and Under", draw_size: 64, points: 200, user_id: 1)
Tournament.create(title: "L6 Bethpage Park Winter Challenger", start_date: Date.new(2020,1,10), end_date: Date.new(2019,1,12), location: "BethPage Park Tennis Center", surface: "Hard", age_category: "16 and Under", draw_size: 128, points: 300, user_id: 1)
Tournament.create(title: "*L6 Eastern Challenger at CourtSense in Bogota", start_date: Date.new(2020,1,17), end_date: Date.new(2019,1,20), location: "Bogota Racquet Club", surface: "Hard", age_category: "16 and Under", draw_size: 32, points: 400, user_id: 1)
Tournament.create(title: "Wimbledon", start_date: Date.new(2019,7,1), end_date: Date.new(2019,7,14), location: "All England Lawn Tennis and Croquet Club", surface: "Grass", age_category: "Men's Division", draw_size: 128, points: 1000, user_id: 2)

#Matches

#Tournament 1
Match.create(round: 128, result: "Won", score: "6-0, 6-0", date: Date.new(2019,1,1), time: Time.new(2019,1,1,10,0,0), notes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta in, fugiat fugit saepe necessitatibus, rem. Explicabo quis doloribus dolores soluta harum a minima tempora nemo perferendis quia dolorem porro autem minus sequi repellat veniam unde, quae eligendi possimus asperiores fuga nihil reprehenderit assumenda natus molestias. Impedit, aperiam enim laudantium delectus!", tournament_id: "1", user_id: "1")
Match.create(round: 64, result: "Won", score: "6-2, 6-3", date: Date.new(2019,1,2), time: Time.new(2019,1,2,14,30,0), notes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta in, fugiat fugit saepe necessitatibus, rem. Explicabo quis doloribus dolores soluta harum a minima tempora nemo perferendis quia dolorem porro autem minus sequi repellat veniam unde, quae eligendi possimus asperiores fuga nihil reprehenderit assumenda natus molestias. Impedit, aperiam enim laudantium delectus!", tournament_id: "1", user_id: "1")
Match.create(round: 32, result: "Won", score: "6-4, 6-1", date: Date.new(2019,1,3), time: Time.new(2019,1,3,13,45,0), notes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta in, fugiat fugit saepe necessitatibus, rem. Explicabo quis doloribus dolores soluta harum a minima tempora nemo perferendis quia dolorem porro autem minus sequi repellat veniam unde, quae eligendi possimus asperiores fuga nihil reprehenderit assumenda natus molestias. Impedit, aperiam enim laudantium delectus!", tournament_id: "1", user_id: "1")

#Tournament 2
Match.create(round: 64, result: "Won", score: "7-6(2), 7-6(4)", date: Date.new(2019,2,1), time: Time.new(2019,1,1,10,0,0), notes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta in, fugiat fugit saepe necessitatibus, rem. Explicabo quis doloribus dolores soluta harum a minima tempora nemo perferendis quia dolorem porro autem minus sequi repellat veniam unde, quae eligendi possimus asperiores fuga nihil reprehenderit assumenda natus molestias. Impedit, aperiam enim laudantium delectus!", tournament_id: "2", user_id: "1")
Match.create(round: 32, result: "Won", score: "6-3, 6-3", date: Date.new(2019,2,2), time: Time.new(2019,1,2,14,30,0), notes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta in, fugiat fugit saepe necessitatibus, rem. Explicabo quis doloribus dolores soluta harum a minima tempora nemo perferendis quia dolorem porro autem minus sequi repellat veniam unde, quae eligendi possimus asperiores fuga nihil reprehenderit assumenda natus molestias. Impedit, aperiam enim laudantium delectus!", tournament_id: "2", user_id: "1")
Match.create(round: 16, result: "Won", score: "7-5, 6-0", date: Date.new(2019,2,3), time: Time.new(2019,1,3,13,45,0), notes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta in, fugiat fugit saepe necessitatibus, rem. Explicabo quis doloribus dolores soluta harum a minima tempora nemo perferendis quia dolorem porro autem minus sequi repellat veniam unde, quae eligendi possimus asperiores fuga nihil reprehenderit assumenda natus molestias. Impedit, aperiam enim laudantium delectus!", tournament_id: "2", user_id: "1")

#Tournament 3
Match.create(round: 16, result: "Lost", score: "6-0, 6-0", date: Date.new(2019,3,1), time: Time.new(2019,1,3,13,45,0), notes: "Lost to the GOAT", tournament_id: "3", user_id: "1")

#Tournament 4
Match.create(round: 64, result: "Won", score: "6-2, 6-1", date: Date.new(2020,1,3), time: Time.new(2019,1,3,13,45,0), notes: "Good first round", tournament_id: "4", user_id: "1")
Match.create(round: 32, result: "Won", score: "6-3, 6-4", date: Date.new(2020,1,4), time: Time.new(2019,1,3,13,45,0), notes: "Good second round", tournament_id: "4", user_id: "1")
Match.create(round: 16, result: "Lost", score: "7-6(3), 6-4", date: Date.new(2020,1,4), time: Time.new(2019,1,3,13,45,0), notes: "Lost to tough opponent", tournament_id: "4", user_id: "1")

#Tournament 5
Match.create(round: 128, result: "Won", score: "6-1, 6-3", date: Date.new(2020,1,10), time: Time.new(2019,1,3,13,45,0), notes: "Played a good match", tournament_id: "5", user_id: "1")
Match.create(round: 64, result: "Won", score: "6-3, 6-3", date: Date.new(2020,1,11), time: Time.new(2019,1,3,13,45,0), notes: "Played a good match", tournament_id: "5", user_id: "1")
Match.create(round: 32, result: "Won", score: "6-3, 4-6, 6-3", date: Date.new(2020,1,11), time: Time.new(2019,1,3,13,45,0), notes: "Won a tough 3 setter", tournament_id: "5", user_id: "1")
Match.create(round: 16, result: "Lost", score: "7-5, 5-7, 7-5", date: Date.new(2020,1,12), time: Time.new(2019,1,3,13,45,0), notes: "Lost a tough 3 setter", tournament_id: "5", user_id: "1")

#Tournament 6
Match.create(round: 32, result: "Won", score: "6-2, 6-0", date: Date.new(2020,1,17), time: Time.new(2019,1,3,13,45,0), notes: "Played very well", tournament_id: "6", user_id: "1")
Match.create(round: 16, result: "Won", score: "6-2, 6-1", date: Date.new(2020,1,17), time: Time.new(2019,1,3,13,45,0), notes: "Played great against good opponent", tournament_id: "6", user_id: "1")
Match.create(round: 8, result: "Won", score: "6-4, 6-1", date: Date.new(2020,1,18), time: Time.new(2019,1,3,13,45,0), notes: "Played another great match", tournament_id: "6", user_id: "1")
Match.create(round: 4, result: "Lost", score: "6-4, 7-5", date: Date.new(2020,1,18), time: Time.new(2019,1,3,13,45,0), notes: "Lost to a great player", tournament_id: "6", user_id: "1")

#Opponents

#Tournament 1
Opponent.create(first_name: "Opponent", last_name: "1", age: 15, handedness: "Right", notes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta in, fugiat fugit saepe necessitatibus, rem. Explicabo quis doloribus dolores soluta harum a minima tempora nemo perferendis quia dolorem porro autem minus sequi repellat veniam unde, quae eligendi possimus asperiores fuga nihil reprehenderit assumenda natus molestias. Impedit, aperiam enim laudantium delectus!", strengths: "", weaknesses: "", utr: 9, match_id: 1)
Opponent.create(first_name: "Opponent", last_name: "2", age: 15, handedness: "Left", notes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta in, fugiat fugit saepe necessitatibus, rem. Explicabo quis doloribus dolores soluta harum a minima tempora nemo perferendis quia dolorem porro autem minus sequi repellat veniam unde, quae eligendi possimus asperiores fuga nihil reprehenderit assumenda natus molestias. Impedit, aperiam enim laudantium delectus!", strengths: "", weaknesses: "", utr: 10, match_id: 2)
Opponent.create(first_name: "Opponent", last_name: "3", age: 14, handedness: "Right", notes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta in, fugiat fugit saepe necessitatibus, rem. Explicabo quis doloribus dolores soluta harum a minima tempora nemo perferendis quia dolorem porro autem minus sequi repellat veniam unde, quae eligendi possimus asperiores fuga nihil reprehenderit assumenda natus molestias. Impedit, aperiam enim laudantium delectus!", strengths: "", weaknesses: "", utr: 11, match_id: 3)

#Tournament 2
Opponent.create(first_name: "Opponent", last_name: "4", age: 14, handedness: "Right", notes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta in, fugiat fugit saepe necessitatibus, rem. Explicabo quis doloribus dolores soluta harum a minima tempora nemo perferendis quia dolorem porro autem minus sequi repellat veniam unde, quae eligendi possimus asperiores fuga nihil reprehenderit assumenda natus molestias. Impedit, aperiam enim laudantium delectus!", strengths: "", weaknesses: "", utr: 9, match_id: 4)
Opponent.create(first_name: "Opponent", last_name: "5", age: 16, handedness: "Left", notes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta in, fugiat fugit saepe necessitatibus, rem. Explicabo quis doloribus dolores soluta harum a minima tempora nemo perferendis quia dolorem porro autem minus sequi repellat veniam unde, quae eligendi possimus asperiores fuga nihil reprehenderit assumenda natus molestias. Impedit, aperiam enim laudantium delectus!", strengths: "", weaknesses: "", utr: 10, match_id: 5)
Opponent.create(first_name: "Opponent", last_name: "6", age: 16, handedness: "Right", notes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta in, fugiat fugit saepe necessitatibus, rem. Explicabo quis doloribus dolores soluta harum a minima tempora nemo perferendis quia dolorem porro autem minus sequi repellat veniam unde, quae eligendi possimus asperiores fuga nihil reprehenderit assumenda natus molestias. Impedit, aperiam enim laudantium delectus!", strengths: "", weaknesses: "", utr: 11, match_id: 6)

#Tournament 3
Opponent.create(first_name: "Roger", last_name: "Federer", age: 37, handedness: "Right", notes: "The GOAT", strengths: "", weaknesses: "", utr: 16, match_id: 7)

#Tournament 4
Opponent.create(first_name: "Robert", last_name: "Smith", age: 16, handedness: "Right", notes: "", strengths: "", weaknesses: "", utr: 8, match_id: 8)
Opponent.create(first_name: "Jack", last_name: "Jones", age: 16, handedness: "Right", notes: "", strengths: "", weaknesses: "", utr: 8.4, match_id: 9)
Opponent.create(first_name: "Will", last_name: "Kingwood", age: 16, handedness: "Right", notes: "", strengths: "", weaknesses: "", utr: 8.7, match_id: 10)

#Tournament 5
Opponent.create(first_name: "Eric", last_name: "Wilson", age: 16, handedness: "Right", notes: "", strengths: "", weaknesses: "", utr: 7.5, match_id: 11)
Opponent.create(first_name: "Kyle", last_name: "Johnson", age: 16, handedness: "Left", notes: "", strengths: "", weaknesses: "", utr: 8.3, match_id: 12)
Opponent.create(first_name: "Jeff", last_name: "Martinez", age: 16, handedness: "Right", notes: "", strengths: "", weaknesses: "", utr: 8.6, match_id: 13)
Opponent.create(first_name: "Robert", last_name: "Levine", age: 16, handedness: "Right", notes: "", strengths: "", weaknesses: "", utr: 9.3, match_id: 14)

#Tournament 6
Opponent.create(first_name: "Alex", last_name: "Klion", age: 16, handedness: "Right", notes: "", strengths: "", weaknesses: "", utr: 7.3, match_id: 15)
Opponent.create(first_name: "Sakura", last_name: "Yamaji", age: 16, handedness: "Right", notes: "", strengths: "", weaknesses: "", utr: 8.3, match_id: 16)
Opponent.create(first_name: "Mike", last_name: "Bernstein", age: 16, handedness: "Right", notes: "", strengths: "", weaknesses: "", utr: 8.8, match_id: 17)
Opponent.create(first_name: "Willy", last_name: "Jenkins", age: 16, handedness: "Right", notes: "", strengths: "", weaknesses: "", utr: 9.8, match_id: 18)
