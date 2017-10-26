# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create! :name => 'John Doe', :email => 'mail@mail.com', :password => '1234567890', :password_confirmation => '1234567890'
10.times do
  Category.create! :name => Faker::Commerce.department(2, true), :description => Faker::Lorem.sentence(4)
end

150.times do
  evento = Event.new(:name => Faker::Lorem.sentence(2),
                      :description => Faker::Lorem.sentence(20),
                      :user=> user,
                      :category_id => (1 + rand(10)),
                      :event_date => Faker::Date.forward(30),
                      :latitude => 4.6815685,
                      :longitude => -74.0711358,
                      :address => Faker::Address.city)
  evento.save!(validate: false)
end