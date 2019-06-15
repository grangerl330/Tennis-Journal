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
