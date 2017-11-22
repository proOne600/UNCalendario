# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create! :name => 'John Doe', :email => 'mail@mail.com', :password => '1234567890', :password_confirmation => '1234567890', :date_of_birth => DateTime.now

10.times do
  Category.create! :name => Faker::Commerce.department(2, true), :description => Faker::Lorem.sentence(4)
end

250.times do |i|
  time = Faker::Time.forward(120, :all)
  evento = Event.new(:name => Faker::Lorem.sentence(2),
                     :description => Faker::Lorem.sentence(20),
                     :user => user,
                     :category_id => (1 + rand(10)),
                     :event_date => time,
                     :even_end_date => Faker::Time.between(time, time.tomorrow, :all),
                     :latitude => 4.6815685,
                     :longitude => -74.0711358,
                     :address => Faker::Address.city,
                     :image => File.new(File.join(Rails.root, 'app', 'assets', 'images', (rand(8).to_s+'.jpg'))),
                     :published => Faker::Boolean.boolean
  ## :published => rand(1)

  )
  evento.save!(validate: false)
end