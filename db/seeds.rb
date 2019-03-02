# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Event.destroy_all
Join.destroy_all

###images
img1 = "http://isd-soft.com/wp-content/uploads/2017/02/DCeCHa_logo.png"
img2 = "https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Chef_2-512.png"
img3 = "https://cdn4.iconfinder.com/data/icons/professions-2-2/151/61-512.png"
img4 = "https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Chef-2-512.png"


##host users
guest = User.create(username: 'Guest', password: 'Guest123', email: 'Guest@guest.com', city: 'San Francisco', image: img4)
user1 = User.create(username: 'Pablo', password: "password", email:'pablo@email.com', city: 'San Francisco', image: img1)
user2 = User.create(username: 'Mike', password: "password", email:'mike@email.com', city: 'New York City', image: img2)
user3 = User.create(username: 'Rick', password: "password", email:'rickandmorty@email.com', city: 'Miami', image: img3)
###users join
user4 = User.create(username: 'Savio', password: "password", email:'savio@email.com', city: 'San Francisco', image: img2)
user5 = User.create(username: 'Jon', password: "password", email:'jon@email.com', city: 'New York', image: img1)
user6 = User.create(username: 'Safuh', password: "password", email:'safuh@email.com', city: 'San Francisco', image: img1)
user7 = User.create(username: 'Ali', password: "password", email:'ali@email.com', city: 'New York', image: img3)

###sf events
event1 = Event.create(name: 'Boulevard', date: '2019-03-20',  city: 'San Francisco', location: "401 Berry St", description: "Buzzy, casual eatery for Hawaiian, Indian & Chinese dishes in a brick-walled space with booths.", host_id: guest.id, spots: 0)

event2 = Event.create(name: 'Gary Danko', date: '2019-03-15', city: 'San Francisco', location: "749 9th St", description: "Renowned chef Gary Danko's fixed-price menus of American cuisine in an elegant but unstuffy setting.", host_id: user4.id)

event3 = Event.create(name: 'Tadich Grill', date: '2019-03-24',  city: 'San Francisco', location: "299 South St Pier 36", description: "Californian fare from local ingredients, served in a salvaged-barn-wood space with an open kitchen.", host_id: user5.id)

event4 = Event.create(name: 'Rich Table', date: '2019-03-21',  city: 'San Francisco', location: "Kokkari Estiatorio", description: "Taverna-inspired cuisine served in a candlelit, wood-beamed dining room that lures a chic crowd.", host_id: user2.id)

event5 = Event.create(name: 'Zuni Cafe', date: '2019-03-17', city: 'San Francisco', location: "799 NE 54th St", description: "Crowds eat Californian-Mediterranean fare (& a popular brunch) in an outdoor space screening films.", host_id: user3.id)

##ny events
event6 = Event.create(name: 'Eleven Madison Park', date: '2019-03-10', city: 'New York', location: "11 Madison Ave", description: "Upscale American tasting menus from chef Daniel Humm served in a high-ceilinged art deco space.", host_id: user3.id)
event7 = Event.create(name: 'Gramercy Tavern', date: '2019-03-11', city: 'New York', location: "42 E 20th St", description: "Danny Meyer's Flatiron District tavern with a fixed-price-only dining room & a bustling bar area.", host_id: user3.id)
event8 = Event.create(name: 'Los Tacos No.1', date: '2019-03-30', city: 'New York', location: "75 9th Ave", description: "Bustling taqueria serving tacos, quesadillas & aguas frescas in a street-style set-up (no seating).", host_id: user3.id)
event9 = Event.create(name: 'Per Se', date: '2019-03-20', city: 'New York', location: "10 Columbus Cir", description: "Chef Thomas Keller's New American restaurant offers luxe fixed-price menus, with Central Park views.", host_id: user3.id)
event10 = Event.create(name: 'Le Bernardin', date: '2019-04-05', city: 'New York', location: "155 W 51st St", description: "Elite French restaurant offers chef Eric Ripert's refined seafood, expert service & luxurious decor.", host_id: user3.id)

###events join

join1 = Join.create(user_id: user4.id, event_id: event1.id)
join2 = Join.create(user_id: guest.id, event_id: event2.id)
join3 = Join.create(user_id: user7.id, event_id: event4.id)
join4 = Join.create(user_id: user5.id, event_id: event4.id)
join5 = Join.create(user_id: user7.id, event_id: event4.id)
join6 = Join.create(user_id: user6.id, event_id: event5.id)
join7 = Join.create(user_id: user2.id, event_id: event3.id)