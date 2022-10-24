# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# Destroy all models:
Review.destroy_all
Album.destroy_all
User.destroy_all

puts "Seeding Users..."
user1 = User.create(username: "Flynn", password: "123", password_confirmation: "123")
# FJM Pure Comedy
user2 = User.create(username: "Magda", password: "123", password_confirmation: "123")
#HS Harry's Home
#AW - Back to Black
user3 = User.create(username: "Doug", password: "123", password_confirmation: "123")
#RH - Amnesiac
# TB = Let It Be
user4 = User.create(username: "Lia", password: "123", password_confirmation: "123")
user5 = User.create(username: "Emily", password: "123", password_confirmation: "123")
# M - Play


# Albums
puts "Seeding Albums..."
album1 = Album.create(title: "Midnights", release_date: "2022", artist: "Taylor Swift", artwork_url: "https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png")
album2 = Album.create(title: "The Joshua Tree", release_date: "1987", artist: "U2", artwork_url: "https://www.backstage360.com/wp-content/uploads/U2_The_Joshua_Tree_cover.jpg")
album3 = Album.create(title: "OK Computer", release_date: "1997", artist: "Radiohead", artwork_url: "https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png")
album4 = Album.create(title: "Pure Comedy", release_date: "2017", artist: "Father John Misty", artwork_url: "https://media.pitchfork.com/photos/5929c216c0084474cd0c3404/1:1/w_600/a970e645.jpg")
album5 = Album.create(title: "Play", release_date: "1999", artist: "Moby", artwork_url: "https://factmag-images.s3.amazonaws.com/wp-content/uploads/2019/05/mobyplay2-5.13.19.jpg")
album6 = Album.create(title: "Achtung Baby", release_date: "1991", artist: "U2", artwork_url: "https://media.pitchfork.com/photos/5929b212ea9e61561daa688c/1:1/w_320,c_limit/e02a65e3.jpg")
album7 = Album.create(title: "Harry's House", release_date: "2022", artist: "Harry Styles", artwork_url: "https://media.pitchfork.com/photos/623b686c6597466fa9d6e32d/1:1/w_600/Harry-Styles-Harrys-House.jpeg")
album8 = Album.create(title: "Amnesiac", release_date: "2001", artist: "Radiohead", artwork_url: "https://media.pitchfork.com/photos/5929a1ee13d197565213874d/1:1/w_320,c_limit/e75d5920.jpeg")
album9 = Album.create(title: "Apollo", release_date: "1983", artist: "Brian Eno", artwork_url: "https://upload.wikimedia.org/wikipedia/en/a/a0/Brianenoapollo.jpg")
album10 = Album.create(title: "Back to Black", release_date: "2006", artist: "Amy Winehouse", artwork_url: "https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png")
album11 = Album.create(title: "Let It Be", release_date: "1970", artist: "The Beatles", artwork_url: "https://upload.wikimedia.org/wikipedia/en/2/25/LetItBe.jpg")


# Reviews
puts "Seeding Reviews..."
Review.create(user_id: user1.id, album_id: album4.id, title: "One of my favorites!", body: "This is Father John Misty at his peak. His political commentary is cutting. I wish more folk artists would follow suit.")
Review.create(user_id: user2.id, album_id: album7.id, title: "I still love him..", body: "I'm a Harry Styles superfan, so he really can't do any wrong. While this is not my favorite of his, it's still better than anything else on the radio!")
Review.create(user_id: user3.id, album_id: album8.id, title: "Hot take", body: "Unpopular opinion: this one's better than Kid A!")
Review.create(user_id: user5.id, album_id: album5.id, title: "I know he's kind of lame now, but..", body: "This album is a stone cold classic. Porclain?? Come on!")
Review.create(user_id: user2.id, album_id: album10.id, title: "Amy <3", body: "'You Know I'm No Good' still makes me tear up")
Review.create(user_id: user3.id, album_id: album11.id, title: "Greatest band ever?? Please..", body: "What an overrated, boring mess. At least this is the album that put an end to their career..")




