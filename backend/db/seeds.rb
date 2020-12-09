# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Listing.destroy_all

def User.digest(string)
  cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                BCrypt::Engine.cost
  BCrypt::Password.create(string, cost: cost)
end

## Create Users
riley = User.create(
  name: "Riley Slayden",
  username: "rileyslayden",
  email: "slaydenriley@gmail.com",
  password_digest: "#{User.digest('codydog')}")

morgan = User.create(
  name: "Morgan Hubbard",
  username: "morganhubbard",
  email: "mbhubbard@gmail.com",
  password_digest: "#{User.digest('codydog')}")

maddi = User.create(
  name: "Maddi Ogle",
  username: "maddiogle",
  email: "maddiogle@gmail.com",
  password_digest: "#{User.digest('codydog')}")

## Create Listings
banjo = riley.listings.build(
  title: "Banjo for Sale!",
  price: "$200",
  description: "Very nice banjo for sale!",
  image_link: "https://d1aeri3ty3izns.cloudfront.net/media/54/543065/600/preview.jpg")

fiddle = morgan.listings.build(
  title: "Fiddle for Sale",
  price: "$1000",
  description: "Very nice fiddle for sale!",
  image_link: "https://www.thestoryoftexas.com/upload/images/artifact-spotlight/2016-12-23-gimble-fiddle/gimble_fiddle_front.jpg")

mando = maddi.listings.build(
  title: "Weber Mandolin",
  price: "$2000",
  description: "Lightly used Weber mandolin. Built in Bozeman Montana!",
  image_link: "https://cdn.shopify.com/s/files/1/0147/9412/9472/products/1_-_Copy_cfdddc51-223a-42bc-88ea-682e18b4f931_1024x1024.jpg?v=1589472828")


banjo.save
fiddle.save
mando.save
