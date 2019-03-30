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
user3 = User.create(username: 'Rick', password: "password", email:'rickandmorty@email.com', city: 'New York', image: img3)
###users join
user4 = User.create(username: 'Savio', password: "password", email:'savio@email.com', city: 'San Francisco', image: img2)
user5 = User.create(username: 'Jon', password: "password", email:'jon@email.com', city: 'New York', image: img1)
user6 = User.create(username: 'Safuh', password: "password", email:'safuh@email.com', city: 'San Francisco', image: img1)
user7 = User.create(username: 'Ali', password: "password", email:'ali@email.com', city: 'New York', image: img3)

###sf events 2017-06-01T08:30
event1 = Event.create(name: 'Boulevard', date: '2019-04-20T18:30',  city: 'San Francisco', location: "401 Berry St", description: "Buzzy, casual eatery for Hawaiian, Indian & Chinese dishes in a brick-walled space with booths.", host_id: guest.id, spots: 0)

event2 = Event.create(name: 'Gary Danko', date: '2019-04-15T19:30', city: 'San Francisco', location: "749 9th St", description: "Renowned chef Gary Danko's fixed-price menus of American cuisine in an elegant but unstuffy setting.", host_id: user2.id, spots: 1)

event3 = Event.create(name: 'Tadich Grill', date: '2019-04-24T20:00',  city: 'San Francisco', location: "299 South St Pier 36", description: "Californian fare from local ingredients, served in a salvaged-barn-wood space with an open kitchen.", host_id: user3.id, spots: 2)

event4 = Event.create(name: 'Rich Table', date: '2019-04-21T21:20',  city: 'San Francisco', location: "Kokkari Estiatorio", description: "Taverna-inspired cuisine served in a candlelit, wood-beamed dining room that lures a chic crowd.", host_id: guest.id, spots: 2)

event5 = Event.create(name: 'Zuni Cafe', date: '2019-04-17T18:30', city: 'San Francisco', location: "799 NE 54th St", description: "Crowds eat Californian-Mediterranean fare (& a popular brunch) in an outdoor space screening films.", host_id: user1.id, spots: 2)

##ny events
event6 = Event.create(name: 'Eleven Madison Park', date: '2019-04-10T17:30', city: 'New York', location: "11 Madison Ave", description: "Upscale American tasting menus from chef Daniel Humm served in a high-ceilinged art deco space.", host_id: user2.id, spots: 0)
event7 = Event.create(name: 'Gramercy Tavern', date: '2019-04-11T18:30', city: 'New York', location: "42 E 20th St", description: "Danny Meyer's Flatiron District tavern with a fixed-price-only dining room & a bustling bar area.", host_id: user3.id, spots: 3)
event8 = Event.create(name: 'Los Tacos No.1', date: '2019-05-30T20:30', city: 'New York', location: "75 9th Ave", description: "Bustling taqueria serving tacos, quesadillas & aguas frescas in a street-style set-up (no seating).", host_id: guest.id, spots: 1)
event9 = Event.create(name: 'Per Se', date: '2019-05-20T15:45', city: 'New York', location: "10 Columbus Cir", description: "Chef Thomas Keller's New American restaurant offers luxe fixed-price menus, with Central Park views.", host_id: user1.id, spots: 0)
event10 = Event.create(name: 'Le Bernardin', date: '2019-04-05T17:30', city: 'New York', location: "155 W 51st St", description: "Elite French restaurant offers chef Eric Ripert's refined seafood, expert service & luxurious decor.", host_id: user2.id, spots: 3)

###events join
#1 host guest spots 0
join1 = Join.create(user_id: user4.id, event_id: event1.id)
join2 = Join.create(user_id: user6.id, event_id: event1.id)
join3 = Join.create(user_id: user3.id, event_id: event1.id)
join4 = Join.create(user_id: user5.id, event_id: event1.id)

#2 host user2 spots 1
join5 = Join.create(user_id: user3.id, event_id: event2.id)
join6 = Join.create(user_id: user1.id, event_id: event2.id)
join7 = Join.create(user_id: user5.id, event_id: event2.id)

#3 host user 3 spots 2
join8 = Join.create(user_id: user7.id, event_id: event3.id)
join9 = Join.create(user_id: user5.id, event_id: event3.id)

#4 host guest spots 2
join10 = Join.create(user_id: user7.id, event_id: event4.id)
join11 = Join.create(user_id: user1.id, event_id: event4.id)

#5 host user 1 spots 2
join12 = Join.create(user_id: user6.id, event_id: event5.id)
join13 = Join.create(user_id: user5.id, event_id: event5.id)

#6 host 2 spots 0
join14 = Join.create(user_id: user1.id, event_id: event6.id)
join15 = Join.create(user_id: guest.id, event_id: event6.id)
join16 = Join.create(user_id: user4.id, event_id: event6.id)
join17 = Join.create(user_id: user5.id, event_id: event6.id)

#7 host 3 spots 3
join18 = Join.create(user_id: user5.id, event_id: event7.id)

#8 host 3 spots 1
join19 = Join.create(user_id: user5.id, event_id: event8.id)
join20 = Join.create(user_id: user4.id, event_id: event8.id)
join21 = Join.create(user_id: user1.id, event_id: event8.id)


#9 host 1 spots 0
join22 = Join.create(user_id: user7.id, event_id: event9.id)
join23 = Join.create(user_id: user3.id, event_id: event9.id)
join24 = Join.create(user_id: user4.id, event_id: event9.id)
join25 = Join.create(user_id: user5.id, event_id: event9.id)

#10 host 2 spots 3
join26 = Join.create(user_id: user5.id, event_id: event10.id)

#### reviews #####
review1 = Review.create(user_id: guest.id, event_id: event1.id, body: 'I love this place!', rating: 5)
review2 = Review.create(user_id: user4.id, event_id: event1.id, body: 'This place is pretty good.', rating: 4)

review3 = Review.create(user_id: user3.id, event_id: event2.id, body: 'First time here, it was great!.', rating: 5)
review4 = Review.create(user_id: user4.id, event_id: event2.id, body: 'Amaaziiiiing', rating: 5)

review5 = Review.create(user_id: user1.id, event_id: event3.id, body: 'Service was a little slow last time', rating: 3)
review7 = Review.create(user_id: user2.id, event_id: event4.id, body: 'Looking forward to it!', rating: 4)
review8 = Review.create(user_id: user5.id, event_id: event5.id, body: 'This place is pretty good.', rating: 4)
review9 = Review.create(user_id: user6.id, event_id: event6.id, body: 'Service is wonderful, food is decent', rating: 4)
review10 = Review.create(user_id: user7.id, event_id: event7.id, body: 'Ill be back for sure', rating: 4)
review11 = Review.create(user_id: guest.id, event_id: event8.id, body: 'Just OK', rating: 3)
review12 = Review.create(user_id: user1.id, event_id: event9.id, body: 'Didnt like this one, but appreciate the effort!', rating: 4)
review13 = Review.create(user_id: user3.id, event_id: event10.id, body: 'Boringgg, can we do more upscale choices', rating: 3)

