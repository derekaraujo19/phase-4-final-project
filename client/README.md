# DiscSnob

DiscSnob is a social hub where users can leave short "hot takes" on their favorite albums.

The Home page is a list of all the albums in the DiscSnob database. Here you can search by title, add a new album, and read the reviews for each entry. After logging in or creating an account in the Profile tab, you'll be greated with a list of albums that you have already reviewed. The My Reviews tab is where you can post a review on one of the albums. You'll also have the ability to edit or delete any review you've previously posted.

A video walkthrough of the application running can be found [here](https://youtu.be/FaSTDTUC6n8).

## Setup:
To get started, in the top level directory, run the following to download the frontend and backend dependencies:
```sh
$ bundle install
$ npm install --prefix client
```

You can run the Rails API on localhost:3000 by running:
```sh
$ rails s
```

To start the React app on localhost:4000, in another tab or window, run:
```sh
$ npm start --prefix client
```

Then, run the migrations and seed file:
```sh
$ rails db:migrate db:seed
```
  *A note on the seed file - running this will first wipe any data contained in the database. If you have already added data via the front end prior to seeding and wish to keep that data, you can comment out the destroy_all methods at the top of the seeds.rb file for the user, album, and review models.


## Acknowledgement
This application was created using Create React App.

Font Used: Google Fonts; [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue?query=Bebas+Neue)