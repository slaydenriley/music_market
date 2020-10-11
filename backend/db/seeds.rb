# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Listing.destroy_all

riley = User.create(name: "Riley Slayden", email: "slaydenriley@gmail.com", password_digest: "codydog")
morgan = User.create(name: "Morgan Hubbard", email: "mbhubbard@gmail.com", password_digest: "codydog")

banjo = riley.listings.build(title: "Banjo for Sale!", price: "$200", description: "Very nice banjo for sale!")
fiddle = morgan.listings.build(title: "Fiddle for Sale", price: "$1000", description: "Very nice fiddle for sale!")

banjo.save
fiddle.save
