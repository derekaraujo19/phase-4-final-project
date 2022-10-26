# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# Destroy all models:
Review.destroy_all
Album.destroy_all
User.destroy_all

# Users
puts "Seeding Users..."
user1 = User.create(username: "Flynn", password: "123", password_confirmation: "123")
user2 = User.create(username: "Magda", password: "123", password_confirmation: "123")
user3 = User.create(username: "Doug", password: "123", password_confirmation: "123")
user4 = User.create(username: "Lia", password: "123", password_confirmation: "123")
user5 = User.create(username: "Emily", password: "123", password_confirmation: "123")
user6 = User.create(username: "Miguel", password: "123", password_confirmation: "123")
user7 = User.create(username: "Hillary", password: "123", password_confirmation: "123")
user8 = User.create(username: "Derek", password: "123", password_confirmation: "123")



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
album12 = Album.create(title: "War", release_date: "1983", artist: "U2", artwork_url: "https://upload.wikimedia.org/wikipedia/en/2/2e/U2_War_album_cover.jpg")
album13 = Album.create(title: "BUBBA", release_date: "2019", artist: "Kaytranada", artwork_url: "https://media.pitchfork.com/photos/5df3c008b91d230008bf3846/1:1/w_600/bubba.jpeg")
album14 = Album.create(title: "Renaissance", release_date: "2022", artist: "Beyoncé", artwork_url: "https://media.pitchfork.com/photos/62bdd2cb9e0c39ec09d73fd7/1:1/w_600/Beyonce-Renaissance.jpg")
album15 = Album.create(title: "Fetch the Bolt Cutters", release_date: "2020", artist: "Fiona Apple", artwork_url: "https://media.pitchfork.com/photos/5e98fdb0e30e2f000804d7d6/1:1/w_320,c_limit/FIONAAPPLECOVER.jpg")


# Reviews
puts "Seeding Reviews..."
Review.create(user_id: user1.id, album_id: album4.id, title: "One of my favorites!", body: "This is Father John Misty at his peak. His political commentary is cutting. I wish more folk artists would follow suit.")
Review.create(user_id: user2.id, album_id: album7.id, title: "I still love him..", body: "I'm a Harry Styles superfan, so he really can't do any wrong. While this is not my favorite of his, it's still better than anything else on the radio!")
Review.create(user_id: user3.id, album_id: album8.id, title: "Hot take", body: "Unpopular opinion: this one's better than Kid A!")
Review.create(user_id: user5.id, album_id: album5.id, title: "I know he's kind of lame now, but..", body: "This album is a stone cold classic. Porclain?? Come on!")
Review.create(user_id: user2.id, album_id: album10.id, title: "Amy <3", body: "'You Know I'm No Good' still makes me tear up")
Review.create(user_id: user3.id, album_id: album11.id, title: "Greatest band ever?? Please..", body: "What an overrated, boring mess. At least this is the album that put an end to their career..")
Review.create(user_id: user4.id, album_id: album12.id, title: "U2's ROCK album", body: "definitely their big rock album. Some people say it's them chasing Led Zeppelin. While I'm glad they didn't continue down that road, it's still legendary")
Review.create(user_id: user2.id, album_id: album13.id, title: "This grooves", body: "Clean sound with a good beat. Kaytranada always does it right.")
Review.create(user_id: user5.id, album_id: album4.id, title: "Ehh..", body: "I get that he's trying to make some big social comentary, but the songs just aren't as good. He peaked with Honeybear")
Review.create(user_id: user4.id, album_id: album11.id, title: "Singing words of wisdom...", body: "There's the obvious radio hits here, but really started to dig in to the other tracks after the doc came out.")
Review.create(user_id: user1.id, album_id: album11.id, title: "Back to basics", body: "Seems to be a safe album coming from the loveable lads, but I appreciate the rock jams peppered in.")
Review.create(user_id: user5.id, album_id: album1.id, title: "i like it", body: "The great moments are great, but generally, I think the “instant classic” label from The Independent was a little aggressive. Great verses / bridges. The choruses are falling a little flat, but has less skips than Lover for me.")
Review.create(user_id: user6.id, album_id: album1.id, title: "Jack Antonoff for the win", body: "The production here is stellar. Some of Jack's best. Very cool and fresh, but still remaining very universal and relevant.")
Review.create(user_id: user7.id, album_id: album14.id, title: "GRAMMY!!", body: "I really hope Renaissance gets album of the year bc it's just so excellent. It's masterfully crafted, a huge technical achievement.")
Review.create(user_id: user8.id, album_id: album6.id, title: "It's grown up with me", body: "This album came out the year I was born, and I feel like we've grown up together. Marked the beginning of the band's most interesting era, one I wish they would revisit. I never get bored revisiting this.")
Review.create(user_id: user8.id, album_id: album2.id, title: "my musical awakening", body: "This is the album that turned me on to music. I remember first hearing the opening organ sound to Where The Streets Have No Name, and I just couldn't move. The build-up, climax, and release of the song transporting little me to a different plane.")
Review.create(user_id: user8.id, album_id: album9.id, title: "The Father of Ambient", body: "This album is the Holy Grail of ambient albums. Put it on when you're happy, put it on when you're sad.. it doesn't matter, just put it on.")
Review.create(user_id: user8.id, album_id: album3.id, title: "best of the 90s", body: "this is one of the best albums from a phenomenal band at the peak of their creativity. i stole this cd from my sister's collection and would play it on loop on the bus to school. it's a classic record ")
Review.create(user_id: user3.id, album_id: album3.id, title: "I get it's a classic, but..", body: "It's no Kid A or Amnesiac! Kinda sounds like rehashed Beatles music to me")
Review.create(user_id: user4.id, album_id: album15.id, title: "10/10", body: "A perfect album!")
Review.create(user_id: user1.id, album_id: album15.id, title: "Wow..", body: "No music has ever sounded quite like this")
Review.create(user_id: user2.id, album_id: album15.id, title: "Overrated", body: "She's so annoying. Just repeating 'ladies' over and over again does not make a good chorus")



